/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-31 20:15:36
 */
import dev from "@/views/dev"
const routes = [
  {
    path: "/dev",
    component:dev,
    exact: true,
  }
];
export default routes;