/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 17:41:55
 */
import "./index.scss"
import { Button } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import FrameView from "@/layout/frame-view"
import { $post } from "@/packages/request"
function Index() {
    $post("/mock/5/signup-web/queryActInfo")
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            //
        })
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
