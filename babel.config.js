/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-03 14:27:31
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 23:49:30
 */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    chrome: '49',
                    ios: '10'
                }
            }
        ]
    ]
};
