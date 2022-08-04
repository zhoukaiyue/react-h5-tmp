/* eslint-disable react/prop-types */
/*
 * @Descripttion:布局组件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 14:56:09
 */
import './index.scss';
import Tabbar from '../tabbar';
function FrameView(props) {
    // 自定义class
    let className = 'frame-view';
    if (props && props.className) {
        className += ` ${props.className}`;
    }
    // 是否显示tabbar,默认不展示
    let showTabbar = false;
    if (props && props.showTabbar) {
        showTabbar = props.showTabbar;
        className += ` h-tabbar`;
    }
    const TabbarTmp = showTabbar ? <Tabbar></Tabbar> : null;

    return (
        <div className={className}>
            {/* 内容区域 */}
            <div className='frame-view-content'>{props.cont}</div>
            {/* 底部Tabbar */}
            {TabbarTmp}
        </div>
    );
}

export default FrameView;
