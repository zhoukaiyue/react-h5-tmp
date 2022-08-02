/*
 * @Descripttion:获取真实大小
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 15:51:15
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 15:53:49
 */

/**
 * 获取真实像素大小
 * 使用场景：postcss不能处理的css样式，如需做成自适应，则需要使用该方法做处理。如在js中设置dom尺寸、行内使用
 * @param px 传入设计稿标注大小(iphone6为标准)，如果是vant组件，请按照设计稿除以2，因为vant的根字体大小为37.5
 * @returns
 */
export default function getRealPx(px) {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    return (screenWidth / 750) * px
}
