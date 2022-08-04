/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 14:56:47
 */

import FrameView from '@/layout/frame-view';
import { Link } from 'react-router-dom';
import getRealPx from '@/utils/tools/get-realpx';

const findRouterList = [
    {
        path: '/dev/layOut',
        label: 'layOut布局组件的使用'
    }
];

const CONT_TMP = (
    <div style={{ fontSize: `${getRealPx(36)}px` }}>
        {findRouterList.map((item, index) => {
            return (
                <Link style={{ display: 'block', textAlign: 'center', marginTop: '20px' }} key={index} to={item.path}>
                    {item.label}
                </Link>
            );
        })}
    </div>
);

function Dev() {
    return <FrameView showTabbar={true} className='dev' cont={CONT_TMP}></FrameView>;
}

export default Dev;
