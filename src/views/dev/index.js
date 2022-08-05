/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 14:42:57
 */

import FrameView from '@/layout/frame-view';
import { List } from 'antd-mobile';

import { useNavigate } from 'react-router-dom';
import getRealPx from '@/utils/tools/get-realpx';

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
        }
    ];
    const CONT_TMP = (
        <div style={{ fontSize: `${getRealPx(36)}px` }}>
            <List header='开发者中心'>
                {findRouterList.map((item, index) => {
                    return (
                        <List.Item
                            key={index}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            {item.label}
                        </List.Item>
                    );
                })}
            </List>
        </div>
    );
    return <FrameView showTabbar={true} className='dev' cont={CONT_TMP}></FrameView>;
}

export default Dev;
