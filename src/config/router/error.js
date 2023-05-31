import { lazy } from 'react';

const routes = [
    {
        path: '/err404',
        component: lazy(() => import('@/views/err404')),
        exact: true,
        meta: {
            title: 'Error404'
        }
    }
];
export default routes;
