/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 15:21:52
 */
import "./index.scss"
import { Button } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import FrameView from "@/layout/frame-view"
function Index() {
    const navigate = useNavigate()
    const goDevPage = () => {
        navigate("/dev")
    }
    return (
        <FrameView
            className={"index"}
            cont={
                <Button color="primary" fill="solid" onClick={goDevPage}>
                    进入开发者中心
                </Button>
            }
        ></FrameView>
    )
}

export default Index
