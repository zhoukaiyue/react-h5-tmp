/* eslint-disable react/prop-types */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:34:42
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 11:09:02
 */

import React from 'react';
import { PullToRefresh, InfiniteScroll, List } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep'; // 十秒的沉睡时间
import FrameView from '@/layout/frame-view';
// 当前页码
let page = 1;
// 列表数据
let pageList = [];

class BaseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [], // 列表数据
            hasMore: false // 是否还有更多内容,结束 loadmore函数
        };
        // 纠正方法的this的指向(使用es6箭头函数，将不需要将事件在constructor中改变this指向)
        this.onRefresh = this.onRefresh.bind(this);
    }

    // 开始
    componentDidMount() {
        console.log('开始');
        this.onRefresh('init');
    }

    // 销毁
    componentWillUnmount() {
        console.log('销毁');
    }

    /**
     * 触发刷新时的处理函数
     * @param {String} type 可选值："init" | "refresh" | ""
     *  */
    async onRefresh(type) {
        console.log(type, '==');
        if (type === 'init' || type === 'refresh') {
            page = 1;
            pageList = [];
            // 下拉刷新时，结束loadMore函数
            this.setState({ hasMore: false });
        }
        // 沉睡1秒
        await sleep(1000);
        try {
            // 加载接口
            // eslint-disable-next-line react/prop-types
            const res = await this.props.req.fn({
                page,
                size: this.props.size
            });
            // 下一页
            page = page + 1;
            // 当前页返回的数据
            const _list = [...res.data.pageList];
            // 追加到pageList集合中
            pageList = [...pageList, ..._list];
            // 设置data
            this.setState({ list: [...pageList] });
            // 列表加载结束
            // eslint-disable-next-line react/prop-types
            if (_list.length < this.props.size) {
                // 结束loadMore函数
                this.setState({ hasMore: false });
            } else {
                // 继续执行loadMore函数
                this.setState({ hasMore: true });
            }
        } catch (error) {
            console.log(`下拉刷新组件在加载数据时方法内部出错：\n` + error);
        }
    }

    render() {
        return (
            <FrameView
                className={'BaseList'}
                showTabbar={false}
                cont={
                    <PullToRefresh
                        onRefresh={async () => {
                            await this.onRefresh('refresh');
                        }}
                    >
                        <List style={{ minHeight: '100vh' }}>
                            {this.state.list.map((item, index) => (
                                <List.Item key={index}>{item.propertyTitle}</List.Item>
                            ))}
                        </List>
                        <InfiniteScroll
                            loadMore={async () => {
                                await this.onRefresh('loadMore');
                            }}
                            hasMore={this.state.hasMore}
                        />
                    </PullToRefresh>
                }
            ></FrameView>
        );
    }
}

// 如果不传size,则默认size为10条
BaseList.defaultProps = {
    size: 10
};

export default BaseList;
