/*
 * @Descripttion:用于根据当前请求的信息，生成请求 Key；
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-21 14:21:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-22 10:07:47
 */

// 工具函数
import { isJson, isJsonStr } from '@/utils/helper/validate';

// QS 模块
import QS from 'qs';

/**
 *
 * @param {AxiosRequestConfig} config
 * @returns
 */
export function generateReqKey(config) {
    // 响应的时候，response.config 中的data 是一个JSON字符串，所以需要转换一下
    if (config && config.data && isJsonStr(config.data)) {
        config.data = JSON.parse(config.data);
    }

    const { method, url, params, data } = config; // 请求方式，参数，请求地址，

    return [method, url, QS.stringify(params), isJson(data) ? QS.stringify(data) : data].join('&'); // 拼接
}
