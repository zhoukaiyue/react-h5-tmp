/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 15:45:09
 */

import { lazy } from 'react';

const routes = [
    {
        path: '/dev',
        component: lazy(() => import('@/views/dev')),
        exact: true
    },
    {
        path: '/dev/layOut',
        component: lazy(() => import('@/views/dev/components/layOut')),
        exact: true
    },
    {
        path: '/dev/list',
        component: lazy(() => import('@/views/dev/components/list')),
        exact: true
    }
];
export default routes;
