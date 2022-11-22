/*
 * @Descripttion: 常用验证器
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-21 17:24:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-22 11:09:11
 */

/**
 * 判断一个字符串是否是JSON格式字符串
 * @param  {string} str
 * @returns 通过返回值来判断：如果true 则是JSON格式，否则，不是JSON格式
 */
export const isJsonStr = function (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

/**
 * [isJson 判断是否是json对象]
 * @param  {[object]}  obj [对象]
 * @return {Boolean}
 */
export function isJson(obj) {
    return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]';
}
