/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 09:55:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 10:00:59
 */
import FrameView from '@/layout/frame-view';
function DevTabbar() {
    return <FrameView showTabbar={true} cont={<div style={{ fontSize: '36px' }}>tabbar 底部标签栏</div>}></FrameView>;
}

export default DevTabbar;
