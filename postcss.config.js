/*
 * @Descripttion: postcss 配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 10:05:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 15:22:31
 */
// postcss.config.js
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        },
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('antd-mobile') !== -1 ? 37.5 : 75;
            },
            propList: ['*']
        }
    }
};
