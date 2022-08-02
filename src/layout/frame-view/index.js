/* eslint-disable react/prop-types */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 14:03:29
 */
import "./index.scss"
// import Tabbar from "../tabbar"
function FrameView(props) {
    let className = "frame-view"
    if (props && props.className) {
        className += ` ${props.className}`
    }
    return (
        <div className={className}>
            {/* 内容区域 */}
            <div className="frame-view-content">{props.cont}</div>
            {/* 底部Tabbar */}
            {/* <Tabbar></Tabbar> */}
        </div>
    )
}

export default FrameView
