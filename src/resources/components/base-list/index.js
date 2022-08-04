/* eslint-disable react/prop-types */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:34:42
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 00:26:25
 */

import React from 'react';
import { PullToRefresh, InfiniteScroll, List } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep'; // 十秒的沉睡时间
import FrameView from '@/layout/frame-view';
// 当前页码
let page = 1;
// 列表数据
let pageList = [];

const size = 10;

class BaseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [], // 列表数据
            hasMore: false // 是否还有更多内容
        };
        // 纠正方法的this的指向(使用es6箭头函数，将不需要将事件在constructor中改变this指向)
        this.onRefresh = this.onRefresh.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    // 开始
    componentDidMount() {
        console.log('开始');
        this.onRefresh();
    }

    // 销毁
    componentWillUnmount() {
        console.log('销毁');
    }

    /** 触发刷新时的处理函数 */
    async onRefresh() {
        // 沉睡1秒
        await sleep(1000);
        try {
            // 加载接口
            // eslint-disable-next-line react/prop-types
            const res = await this.props.req.fn({
                page,
                size
            });
            // 下一页
            page = page + 1;
            const _list = [...res.data.pageList];

            pageList = [...pageList, ..._list];
            this.setState({ list: [...pageList] });
            // 列表加载结束
            // eslint-disable-next-line react/prop-types
            if (size < 2) {
                this.setState({ hasMore: false });
            } else {
                this.setState({ hasMore: true });
            }
        } catch (error) {
            console.log(`下拉刷新组件在加载数据时方法内部出错：\n` + error);
        }
    }

    /** 加载更多的回调函数 */
    async loadMore() {
        this.onRefresh();
    }

    render() {
        return (
            <FrameView
                className={'BaseList'}
                showTabbar={false}
                cont={
                    <PullToRefresh onRefresh={this.onRefresh}>
                        <List style={{ minHeight: '100vh' }}>
                            {this.state.list.map((item, index) => (
                                <List.Item key={index}>1111</List.Item>
                            ))}
                        </List>
                        <InfiniteScroll loadMore={this.loadMore} hasMore={this.state.hasMore} />
                    </PullToRefresh>
                }
            ></FrameView>
        );
    }
}

export default BaseList;
