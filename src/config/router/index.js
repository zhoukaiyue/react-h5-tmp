/*
 * @Descripttion:index router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 21:50:09
 */

import { lazy } from 'react';
const routes = [
    {
        path: '/',
        exact: true,
        redirectTo: '/index' // 自定义属性，重定向到目标页面 router.path
    },
    {
        path: '/index',
        component: lazy(() => import('@/views/index')),
        exact: true,
        meta: {
            title: '首页'
        }
    }
];
export default routes;
