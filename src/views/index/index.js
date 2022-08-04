/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 23:13:11
 */
import './index.scss';
import FrameView from '@/layout/frame-view';
import { getqQeryActInfo } from '@/config/apis/index';
import { Tag } from 'antd-mobile';
function Index() {
    const getqQeryActInfoEvt = async () => {
        try {
            const res = await getqQeryActInfo({});
            console.log(res);
        } catch (error) {
            console.log(`获取活动信息时函数内部发生异常：\n` + error);
        }
    };
    // 获取活动信息
    getqQeryActInfoEvt();

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
