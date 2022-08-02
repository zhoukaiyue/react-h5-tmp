/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 15:25:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 16:01:50
 */
import FrameView from "@/layout/frame-view"
import getRealPx from "@/utils/tools/get-realpx"

function _cont() {
    return (
        <div style={{ color: "#333", padding: "20px", fontSize: `${getRealPx(32)}px` }}>
            布局组件的:
            <br />
            使用方法请参考 layOut 文件下面的README.md文件。
        </div>
    )
}
function DevLayOut() {
    return <FrameView className="dev-layout" cont={_cont()}></FrameView>
}

export default DevLayOut
