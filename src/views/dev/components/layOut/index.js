/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 15:25:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 15:20:41
 */
import FrameView from '@/layout/frame-view';
import getRealPx from '@/utils/tools/get-realpx';

function DevLayOut() {
    const DevLayOutTmp = (
        <div style={{ color: '#333', padding: '20px', fontSize: `${getRealPx(32)}px` }}>
            布局组件的:
            <br />
            使用方法请参考 layOut 文件下面的README.md文件。
        </div>
    );
    return <FrameView className='dev-layout' cont={DevLayOutTmp}></FrameView>;
}

export default DevLayOut;
