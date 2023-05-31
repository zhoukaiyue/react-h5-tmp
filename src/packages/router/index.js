/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 16:29:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 16:54:08
 */

const modulesFiles = require.context('@/config/router', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

const routers = [];

for (const key in modules) {
    // if (key === 'dev' && ['development'].includes(process.env.NODE_ENV)) {
    //     routers.push(...modules[key]);
    // }
    // if (key !== 'dev') {
    //     routers.push(...modules[key]);
    // }

    routers.push(...modules[key]);
}

export default routers;
