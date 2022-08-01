/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-31 20:23:24
 * @FilePath: \react-h5\src\App.js
 * @Description: router-view
 */

import "@/views/app/App.scss"

import React from "react"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import routers from "@/packages/router"

const App = () => {
    return (
        <Router>
            <Routes>
                {routers.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            exact
                            path={item.path}
                            element={<item.component />} // 不是老版本的：component 或 render
                        />
                    )
                })}
                {/* 重定向 */}
                <Route path="/" element={<Navigate replace to="/index" />} />
            </Routes>
        </Router>
    )
}

export default App
