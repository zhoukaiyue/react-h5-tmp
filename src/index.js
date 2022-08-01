/*
 * @Descripttion: 入口js文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-29 15:57:20
 */
/*
 * @Description: 描述
 */
import React from "react"
import ReactDOM from "react-dom/client"
import "@/assets/css/index.scss"
import App from "@/views/app/App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// 性能测试
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
