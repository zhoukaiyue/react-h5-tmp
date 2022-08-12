/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 14:16:05
 * @FilePath: \react-h5\src\App.js
 * @Description: 顶级 router-view
 */

import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routers from '@/packages/router';
import TheLazyLoading from '@/views/components/TheLazyLoading';

// 设置网页title
// eslint-disable-next-line react/prop-types
function SET_DOC_TITLE({ item }) {
    // eslint-disable-next-line react/prop-types
    const title = item.meta && item.meta.title ? item.meta.title : 'react-h5-tmp';
    document.title = title;
    return <item.component />;
}

// router基路径
const ROUTER_BASE = process.env.REACT_APP_ROUTER_BASE;

const App = () => {
    return (
        <Router basename={ROUTER_BASE}>
            <Suspense fallback={TheLazyLoading}>
                <Routes>
                    {routers.map((item, index) => {
                        return item.path === '/' ? (
                            <Route key={index} path='/' element={<Navigate replace to={item.redirectTo} />} />
                        ) : (
                            <Route
                                key={index}
                                exact
                                path={item.path}
                                element={<SET_DOC_TITLE item={item} />} // 不是老版本的：component 或 render
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
