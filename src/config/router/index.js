/*
 * @Descripttion:index router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-03 09:39:59
 */

import { lazy } from 'react';
const index = lazy(() => import('@/views/index'));
const routes = [
    {
        path: '/',
        component: index,
        exact: true
    },
    {
        path: '/index',
        component: index,
        exact: true
    }
];
export default routes;
