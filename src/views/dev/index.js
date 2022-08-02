/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 15:57:18
 */

import FrameView from "@/layout/frame-view"
import { Link } from "react-router-dom"
import getRealPx from "@/utils/tools/get-realpx"

const findRouterList = [
    {
        path: "/dev/layOut",
        label: "layOut布局组件的使用",
    },
]

function _cont() {
    return (
        <div style={{ fontSize: `${getRealPx(36)}px` }}>
            {findRouterList.map((item, index) => {
                return (
                    <Link
                        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
                        key={index}
                        to={item.path}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </div>
    )
}

function Dev() {
    return <FrameView className="dev" cont={_cont()}></FrameView>
}

export default Dev
