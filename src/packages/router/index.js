/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 16:29:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-29 16:36:50
 */

import router404 from "./router404.js"

const modulesFiles = require.context("@/config/router", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const routers = []

for (const key in modules) {
    routers.push(...modules[key])
}
// 404页面

routers.push(...router404)

export default routers