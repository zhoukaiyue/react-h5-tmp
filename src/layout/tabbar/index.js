/*
 * @Descripttion: layOut Tabbar
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-03 18:00:18
 */
import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
function Tabbar() {
    const navigate = useNavigate();

    const tabs = [
        {
            key: 'index',
            title: '首页',
            icon: <AppOutline />
        },
        {
            key: 'dev',
            title: '个人中心',
            icon: <UserOutline />,
            badge: Badge.dot
        }
    ];
    //  路由跳转
    const setRouteActive = (value) => {
        console.log(value);
        navigate(value);
    };
    return (
        <div className='layout-tabbar'>
            <TabBar safeArea={true} onChange={(value) => setRouteActive(value)}>
                {tabs.map((item) => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    );
}

export default Tabbar;
