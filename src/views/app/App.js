/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 21:54:03
 * @FilePath: \react-h5\src\App.js
 * @Description: 顶级 router-view
 */

import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routers from "@/packages/router"
// router基路径
const ROUTER_BASE = process.env.REACT_APP_ROUTER_BASE

const App = () => {
    return (
        <Router basename={ROUTER_BASE}>
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
            </Routes>
        </Router>
    )
}

export default App
