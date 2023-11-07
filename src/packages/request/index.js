/*
 * @Descripttion: axios终极封装，包含取消重复请求、请求错误重试、loading基本功能与交互
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-09 17:18:27
 */
import axios from 'axios';
import QS from 'qs';
// 请求库loading
import loading from './loading';
// 请求重发
import { againRequest } from './retry';
// 取消重复请求
import { addPendingMap, removePendingRequest } from './cancel';
// http错误状态码处理
import { httpErrorStatusHandle } from './httpErrorStatusHandle';

//  将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASEURL;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
// 请求超时时间设定
axios.defaults.timeout = 10000;

/**
 * 是否开启取消重复请求模式, 默认为 true。
 * 开启该功能则意味着同一个请求如果是 pending 中，则后续发的与该请求【重复的请求】①都会被取消。
 * 比如在 A 请求还处于 pending 状态时，后发的所有与 A 【重复的请求】①都取消。
 *
 * 须知：
 * 1、该属性是全局的，如果你想在某个请求上面禁止使用该功能，则需要在【指定配置】②中设置 enableCancelModel:false。
 *
 * 名词解释：
 * 1、如何判定重复请求①?
 * 答：如果请求地址、请求方式、请求参数一样，那么我们就能认为是同一个请求。
 * 2、什么是指定配置②?
 * 答：指定配置就是在实例中传的config，如 axios.post(url, params, config)，它将与实例的配置合并。
 */
const enableCancelModel = true;

/**
 * 是否开启请求重试模式, 默认为 true。
 * 开启该功能则意味着请求错误时重新发送接口，也就是说除了原请求外还会重发3次,就是不管出什么错都会请求重发，默认每个三秒，重新发送一次，总共三次。
 *
 * 须知：
 * 1、该属性是全局的，如果你想在某个请求上面禁止使用该功能，则需要在【指定配置】②中设置 enableRetryModel:false。
 *
 */
const enableRetryModel = true;
/**
 * 全局的请求重试相关配置
 *
 * 须知：
 * 1、默认请求重试次数是3次，如果你想针对某个请求额外设置请求次数，则需要在【指定配置】②中设置 retryFrequency:重试次数。
 * 2、默认重试间隔是3秒，如果你想针对某个请求额外设置间隔时间，则需要在【指定配置】②中设置 retryDelay:间隔时间。
 */
const retryConfig = {
    frequency: 3, // 重试次数（重试频率）
    delay: 3000 // 延迟时间
};

/**
 * 是否开启接口错误信息展示，默认为true
 * 开启该功能则意味着请求错误时，会提示错误信息
 *
 * 须知：
 * 1、该属性是全局的，如果你想在某个请求上面禁止使用该功能，则需要在【指定配置】②中设置 enableErrorMessage:false。
 */
const enableErrorMessage = true;

/** 拦截器之请求拦截器 */
axios.interceptors.request.use(
    function (config) {
        // 显示loading
        loading.show();

        // 全局开关开启并且该请求也允许
        if (enableCancelModel && config.enableCancelModel !== false) {
            // 如果当前请求存在pendingMap队列中，就先删除重复请求
            removePendingRequest(config);
            // 将当前请求加入pendingMap队列
            addPendingMap(config);
        }

        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 隐藏loading
        loading.hide();

        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

/** 拦截器之响应拦截器 */
axios.interceptors.response.use(
    function (response) {
        // 隐藏loading
        loading.hide();

        // 响应正常时候就从pending队列清除该请求
        enableCancelModel && removePendingRequest(response.config);

        // 对响应数据做点什么
        return response;
    },
    function (error) {
        // 隐藏loading
        loading.hide();

        // 响应失败也要从pending队列清除该请求
        enableCancelModel && error.config && removePendingRequest(error.config);

        // 需要特殊处理请求被取消的情况
        // 如果不是取消请求导致的, 就进行重新发送
        if (!axios.isCancel(error) && enableRetryModel) {
            // 请求重发
            return againRequest(error, axios, retryConfig);
        }

        // 处理错误状态码
        enableErrorMessage && httpErrorStatusHandle(error, axios);

        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

/**
 * post请求
 * 使用场景：适用于你的请求类型是post，入参格式是formData类型的
 * @param {string} url 接口地址
 * @param {object} params 入参
 * @param {AxiosRequestConfig} config 其他配置项，默认为{}
 * @returns {Promise}
 */

export const $post = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, QS.stringify(params), config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * post请求
 * 使用场景：适用于你的请求类型是post，入参格式是json类型的
 * @param {string} url 接口地址
 * @param {object} params 入参
 * @param {AxiosRequestConfig} config 其他配置项，默认为{}
 * @returns {Promise}
 */

export const $http = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * get请求
 * 使用场景：适用于你的请求类型是get
 * @param {string} url 接口地址
 * @param {object} params 入参
 * @param {AxiosRequestConfig} config 其他配置项，默认为{}
 * @returns {Promise}
 */
export const $get = (url, params = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params, ...config })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
