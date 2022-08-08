/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 09:57:53
 */
import './index.scss';
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
            path: '/dev/list',
            label: 'list 下拉刷新滚动加载列表'
        },
        {
            path: '/dev/lodashjs',
            label: 'lodashjs 库的使用规范'
        },
        {
            path: '/dev/tabbar',
            label: 'tabbar 底部标签栏'
        }
    ];
    const CONT_TMP = (
        <div>
            <div>
                <Tag>react-h5-tmp</Tag>&nbsp; 是基于&nbsp; create-react-app&nbsp; 创建并使用&nbsp; antd-mobile&nbsp;
                作为 UI 组件库的一个移动端脚手架，开箱即用。
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
    return <FrameView className='dev' cont={CONT_TMP}></FrameView>;
}

export default Dev;
