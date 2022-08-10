/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:43:17
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-11 00:25:58
 */
import './index.scss';
import FrameView from '@/layout/frame-view';
import BaseList from '@/resources/components/base-list';
import { getList } from '@/config/apis/list';
function DevBaseList() {
    /**
     * 下拉刷新滚动加载列表需要的参数
     * @param {Promise} fn 接口地址
     * @param {Object} params 其他参数
     */
    const req = {
        fn: getList,
        params: {
            id: '11'
        }
    };

    // eslint-disable-next-line no-undef
    return (
        <FrameView
            className={'BaseList'}
            showTabbar={false}
            cont={
                <BaseList
                    req={req}
                    size={9}
                    ItemContent={(item, index) => {
                        // console.log(item);
                        // console.log(index);
                        return <div key={'_k' + index}>{item.areaName}</div>;
                    }}
                ></BaseList>
            }
        ></FrameView>
    );
}

export default DevBaseList;
