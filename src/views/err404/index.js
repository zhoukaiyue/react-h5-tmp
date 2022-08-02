/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 13:55:33
 */
import "./index.scss"
import FrameView from "../../layout/frame-view"

function _tmp() {
    return (
        <div className="con">
            <div className="bg"></div>
            <p className="text"> 抱歉，您访问的内容不存在～</p>
        </div>
    )
}

function Err404() {
    return <FrameView className={"err404-page"} cont={_tmp()}></FrameView>
}

export default Err404
