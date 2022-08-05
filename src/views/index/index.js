/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 11:35:26
 */
import './index.scss';
import FrameView from '@/layout/frame-view';
import { Tag } from 'antd-mobile';
function Index() {
    const INDEX_TMP = (
        <div>
            <h1>react-h5-tmp简介：</h1>
            <br />
            <Tag>react-h5-tmp</Tag>&nbsp; 是基于&nbsp; create-react-app&nbsp; 创建并使用&nbsp; antd-mobile&nbsp; 作为 UI
            组件库的一个移动端脚手架，开箱即用。
        </div>
    );
    return <FrameView className={'index'} showTabbar={true} cont={INDEX_TMP}></FrameView>;
}

export default Index;
