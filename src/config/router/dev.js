/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:27:15
 */

import { lazy } from 'react';

const routes = [
    {
        path: '/dev',
        component: lazy(() => import('@/views/dev')),
        exact: true,
        meta: {
            title: '开发者中心'
        }
    },
    {
        path: '/dev/layOut',
        component: lazy(() => import('@/views/dev/components/layOut')),
        exact: true,
        meta: {
            title: 'layOut 布局组件'
        }
    },
    {
        path: '/dev/list',
        component: lazy(() => import('@/views/dev/components/list')),
        exact: true,
        meta: {
            title: '下拉刷新，滚动加载列表'
        }
    },
    {
        path: '/dev/lodashjs',
        component: lazy(() => import('@/views/dev/components/lodashjs')),
        exact: true,
        meta: {
            title: 'lodashjs使用规范'
        }
    },
    {
        path: '/dev/tabbar',
        component: lazy(() => import('@/views/dev/components/tabbar')),
        exact: true,
        meta: {
            title: 'tabbar组件'
        }
    },
    {
        path: '/dev/redux',
        component: lazy(() => import('@/views/dev/components/redux')),
        exact: true,
        meta: {
            title: 'redux状态管理的使用'
        }
    },
    {
        path: '/dev/eventBus',
        component: lazy(() => import('@/views/dev/components/eventBus')),
        exact: true,
        meta: {
            title: 'EventBus事件总线的使用'
        }
    }
];
export default routes;
