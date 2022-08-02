/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 15:33:43
 */
import dev from "@/views/dev"
import DevLayOut from "@/views/dev/components/layOut"
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
