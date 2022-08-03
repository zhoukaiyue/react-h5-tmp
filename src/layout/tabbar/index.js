/*
 * @Descripttion: layOut Tabbar
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-03 17:32:49
 */
import { Badge, TabBar } from "antd-mobile"
import { AppOutline, UserOutline } from "antd-mobile-icons"
function Tabbar() {
    const tabs = [
        {
            key: "home",
            title: "首页",
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: "personalCenter",
            title: "个人中心",
            icon: <UserOutline />,
        },
    ]

    return (
        <div className="layout-tabbar">
            <TabBar safeArea={true}>
                {tabs.map((item) => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}

export default Tabbar
