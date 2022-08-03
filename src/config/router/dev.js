/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-03 09:43:38
 */

import { lazy } from "react"
const dev = lazy(() => import("@/views/dev"))
const DevLayOut = lazy(() => import("@/views/dev/components/layOut"))
const routes = [
    {
        path: "/dev",
        component: dev,
        exact: true,
    },
    {
        path: "/dev/layOut",
        component: DevLayOut,
        exact: true,
    },
]
export default routes
