/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-14 10:57:34
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 16:40:38
 */

const inBrowser = typeof window !== 'undefined';
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
const isEdge = UA && UA.indexOf('edge/') > 0;
const isAndroid = UA && UA.indexOf('android') > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);

export const env = {
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isPhantomJS,
    isFF
};
