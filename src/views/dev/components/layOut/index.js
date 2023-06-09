/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 15:25:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-09 11:45:36
 */
import FrameView from '@/layout/frame-view';

function DevLayOut() {
    const DevLayOutTmp = (
        <div style={{ padding: '20px' }}>
            <blockquote>
                基础布局组件是用来布局的，集成了tabbar（底部导航栏，用于在不同页面之间进行切换。）功能于一体。
            </blockquote>
            <p>
                <br />
            </p>
            <strong style={{ textAlign: 'start' }}>何时使用</strong>
            <ul>
                <li style={{ textAlign: 'start' }}>&nbsp;&nbsp;&nbsp;- 常用于路由组件的根标签使用。</li>
            </ul>
            <p style={{ textAlign: 'start' }}>
                <br />
            </p>
            <strong style={{ textAlign: 'start' }}>代码演示</strong>
            <p>
                <span style={{ color: 'rgb(171, 178, 191)' }}>&lt;</span>
                <span style={{ color: 'rgb(224, 108, 117)' }}>frame-view</span>
                <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                <span style={{ color: 'rgb(209, 154, 102)' }}>class</span>
                <span style={{ color: 'rgb(171, 178, 191)' }}>=</span>
                <span style={{ color: 'rgb(152, 195, 121)' }}>dev-layout</span>
                <span style={{ color: 'rgb(171, 178, 191)' }}>&gt;</span>
            </p>
            <p>
                <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp; &nbsp;xxx</span>
            </p>
            <p>
                <span style={{ color: 'rgb(171, 178, 191)' }}>&lt;/</span>
                <span style={{ color: 'rgb(224, 108, 117)' }}>frame-view&gt;</span>
            </p>
            <p>
                <br />
            </p>
        </div>
    );
    return <FrameView className='dev-layout' cont={DevLayOutTmp}></FrameView>;
}

export default DevLayOut;
