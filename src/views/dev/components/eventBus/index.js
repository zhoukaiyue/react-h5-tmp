/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:24:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 13:45:53
 */
import FrameView from '@/layout/frame-view';
import getRealPx from '@/utils/tools/get-realpx';
import Children from './components/children';
// 引入event文件
import eventBus from '@/utils/tools/eventBus';

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
