/*
 * @Descripttion: layOut Tabbar
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 14:57:17
 */
import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate, useLocation } from 'react-router-dom';
function Tabbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const tabs = [
        {
            key: '/index',
            title: '首页',
            icon: <AppOutline />
        },
        {
            key: '/dev',
            title: '开发者中心',
            icon: <UserOutline />,
            badge: Badge.dot
        }
    ];
    //  路由跳转
    const setRouteActive = (value) => {
        navigate(value);
    };
    return (
        <div className='layout-tabbar'>
            <TabBar activeKey={pathname} safeArea={true} onChange={(value) => setRouteActive(value)}>
                {tabs.map((item) => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    );
}

export default Tabbar;
