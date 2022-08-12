/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-12 10:06:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 13:59:53
 */
import assign from 'lodash/assign';
const modulesFiles = require.context('@/config/store', true, /\.js$/);
export const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    modules = assign(modules, value.default);
    return modules;
}, {});
