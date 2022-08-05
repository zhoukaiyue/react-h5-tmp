/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:43:17
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 10:55:25
 */
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
    return <BaseList req={req} size={9}></BaseList>;
}

export default DevBaseList;
