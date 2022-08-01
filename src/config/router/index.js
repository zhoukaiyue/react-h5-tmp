/*
 * @Descripttion:index router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-31 20:17:11
 */
import index from "@/views/index"
const routes = [
    {
        path: "/index",
        component: index,
        exact: true,
    },
]
export default routes
