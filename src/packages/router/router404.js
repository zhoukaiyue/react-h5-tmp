/*
 * @Descripttion:base router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-31 20:14:13
 */

import err404 from "@/views/err404";
const routes = [
  {
    path: "*",
    component: err404,
    exact: true,
  },
];
export default routes;
