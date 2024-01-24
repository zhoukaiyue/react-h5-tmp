/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-24 15:02:41
 */
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { RightOutline } from 'antd-mobile-icons';
import { Tag } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
function Dev() {
    const navigate = useNavigate();
    const findRouterList = [
        {
            path: '/dev/layOut',
            label: 'layOut 布局组件的使用'
        },
        {
            path: '/dev/tabbar',
            label: 'tabbar 底部标签栏'
        },
        {
            path: '/dev/redux',
            label: 'redux状态管理的使用'
        },
        {
            path: '/dev/eventBus',
            label: 'EventBus事件总线的使用'
        },
        {
            path: '/dev/tool',
            label: '脚手架已经集成的工具库'
        }
    ];
    const CONT_TMP = (
        <div>
            <div>
                <Tag>react-h5-tmp</Tag>是基于 create-react-app(v5) 创建并使用 Ant Design Mobile + JavaScript + craco +
                Redux + sass + Rem 布局适配 + axios（封装）+ Eslint + Prettier
                等流行技术栈构建移动端模板脚手架，开箱即用。
            </div>
            <div style={{ padding: '12px 0' }}>下面是一些基础组件的使用demo，可以点进去试一试</div>
            <div className='nav'>
                {findRouterList.map((item, index) => {
                    return (
                        <div
                            className='nav__block'
                            key={index}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            <span> {item.label}</span>
                            <RightOutline style={{ fontSize: 16 }} color={'#B6C3D2'} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return <FrameView className={styles.dev} cont={CONT_TMP}></FrameView>;
}

export default Dev;
