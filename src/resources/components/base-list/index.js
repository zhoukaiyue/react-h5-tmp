/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:34:42
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 17:28:44
 */
import { useState } from 'react';
import { PullToRefresh, List } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep'; // 十秒的沉睡时间

// 当前页码
let page = 1;
// 列表数据
// let pageList = [];
function getNextData(data) {
    const ret = [...data];
    console.log(data);
    return ret;
}

function BaseList(props) {
    const [pageList, setData] = useState(() => getNextData());
    // eslint-disable-next-line react/prop-types
    const size = 10;
    /** 触发刷新时的处理函数 */
    const onRefresh = async () => {
        // 沉睡1秒
        await sleep(1000);
        try {
            // 加载接口
            // eslint-disable-next-line react/prop-types
            const res = await props.req.fn({
                page,
                size
            });
            // 下一页
            page = page + 1;
            const _list = [...res.data.pageList];

            // pageList = [...pageList, ..._list];
            setData(...getNextData(_list), ...pageList);

            // 列表加载结束
            // eslint-disable-next-line react/prop-types
            if (_list.length < size) {
                //
            } else {
                //
            }
        } catch (error) {
            console.log(`下拉刷新组件在加载数据时方法内部出错：\n` + error);
        }
    };

    return (
        <PullToRefresh onRefresh={onRefresh}>
            <List style={{ minHeight: '100vh' }}>
                <List.Item>{pageList}</List.Item>
            </List>
        </PullToRefresh>
    );
}

export default BaseList;
