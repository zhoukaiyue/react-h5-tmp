/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:24:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 13:45:53
 */
import FrameView from '@/layout/frame-view';
import Children from './components/children';
// 引入event文件,这里的eventBus是一个事件总线;  getRealPx是一个方法，用于获取真实的px
import { eventBus, getRealPx } from '@/utils/tools';

function DevEventBus() {
    return (
        <FrameView
            cont={
                <div style={{ color: '#333', padding: '20px', fontSize: `${getRealPx(32)}px` }}>
                    <strong>跨级组件使用EventBus通信案例：</strong>

                    <button
                        style={{ margin: '20px 0' }}
                        onClick={() => {
                            eventBus.emit('change', '你好！');
                        }}
                    >
                        传值给孙组件
                    </button>
                    <Children></Children>
                </div>
            }
        ></FrameView>
    );
}

export default DevEventBus;
