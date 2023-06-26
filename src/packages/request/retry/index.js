/*
 * @Descripttion: 实现请求错误时重新发送接口
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-21 10:54:10
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-26 09:44:39
 */

// 工具函数之判断字符串是否是json字符串
import { isJsonStr } from '@/utils/helper/validate';
// 睡眠函数
import { sleep } from '@/utils/helper/sleep';

// http错误状态码处理
import { httpErrorStatusHandle } from '../httpErrorStatusHandle';

/**
 * @param {失败信息} err
 * @param {实例化的单例} axios
 * @param {全局请求重试相关配置} retryConfig
 * @returns
 */

export async function againRequest(err, axios, retryConfig) {
    const config = err.config;

    // config.enableRetryModel 具体接口配置的是否开启请求重试模式
    if (!config || config.enableRetryModel === false) {
        httpErrorStatusHandle(err, axios);
        return Promise.reject(err);
    }

    // 重发次数
    const retry = (config && config.retryFrequency) || retryConfig.frequency;
    if (!retry) {
        console.log(`重试次数为0`);
        httpErrorStatusHandle(err, axios);
        return Promise.reject(err);
    }

    // 设置用于记录重试计数的变量 默认为0
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过了重试次数
    if (config.__retryCount >= retry) {
        console.log(`重试次数已用完`);
        httpErrorStatusHandle(err, axios);
        return Promise.reject(err);
    }
    // 重试次数
    config.__retryCount += 1;

    // 延时处理（默认每个三秒重新请求一次）
    const retryDelay = (config && config.retryDelay) || retryConfig.delay;
    await sleep(retryDelay);

    // 判断是否是JSON字符串
    if (config.data && isJsonStr(config.data)) {
        config.data = JSON.parse(config.data);
    }
    // 重新发起axios请求
    return axios(config);
}
