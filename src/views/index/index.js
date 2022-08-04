/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 15:02:58
 */
import './index.scss';
import FrameView from '@/layout/frame-view';
import { $post } from '@/packages/request';
function Index() {
    const getqQeryActInfo = async () => {
        try {
            const res = await $post('/mock/5/signup-web/queryActInfo');
            console.log(res);
        } catch (error) {
            console.log(`获取活动信息时函数内部发生异常：\n` + error);
        }
    };
    // 获取活动信息
    getqQeryActInfo();

    const INDEX_TMP = <div>首页</div>;
    return <FrameView className={'index'} showTabbar={true} cont={INDEX_TMP}></FrameView>;
}

export default Index;
