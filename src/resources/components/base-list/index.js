/* eslint-disable react/prop-types */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:34:42
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 16:37:57
 */
import './index.scss';
import React from 'react';
import { PullToRefresh, InfiniteScroll, List, Empty } from 'antd-mobile';
// import { sleep } from 'antd-mobile/es/utils/sleep'; // 十秒的沉睡时间

class BaseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1, // 当前页码
            list: [], // 列表数据
            hasMore: true // 是否还有更多内容,结束 loadmore函数
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
     * @param {String} type 可选值："init"（初始化） | "refresh"（下拉刷新操作） | "load" 滚动加载
     *  */
    async onRefresh(type) {
        // 下拉刷新方式
        if (type === 'refresh') {
            // 下拉刷新时，结束loadMore函数
            this.setState({ hasMore: false });
        }
        // 初始化或者下拉刷新时清空列表
        if (type === 'init' || type === 'refresh') {
            // 情况列表
            this.setState({ list: [] });
        }

        // // 沉睡1秒
        // await sleep(1000);
        try {
            // 加载接口
            // eslint-disable-next-line react/prop-types
            const res = await this.props.req.fn({
                page: this.state.page,
                size: this.props.size || 10
            });
            // 下一页
            this.setState({ page: this.state.page + 1 });

            // 当前页返回的数据
            const _list = [...res.data.pageList];

            // 设置list
            this.setState({ list: [..._list, ...this.state.list] });

            // 分页是否加载完毕
            if (_list.length < (this.props.size || 10)) {
                // 结束loadMore函数
                this.setState({ hasMore: false });
            } else {
                // 继续执行loadMore函数
                this.setState({ hasMore: true });
            }
        } catch (error) {
            console.log(`下拉刷新组件在加载数据时方法内部出错：\n` + error);
            this.setState({ hasMore: false });
        }
    }

    render() {
        return (
            <PullToRefresh
                className={'base-list'}
                onRefresh={async () => {
                    await this.onRefresh('refresh');
                }}
            >
                <List style={{ '--border-top': 'none', '--border-bottom': 'none' }}>
                    {this.state.list.length ? (
                        this.state.list.map((item, index) => (
                            <List.Item key={index}>{this.props.ItemContent(item, index)}</List.Item>
                        ))
                    ) : (
                        <Empty className='baseList-adm-empty' imageStyle={{ width: 180 }} description='暂无数据' />
                    )}
                </List>
                <InfiniteScroll
                    loadMore={async () => {
                        await this.onRefresh('loadMore');
                    }}
                    hasMore={this.state.hasMore}
                />
            </PullToRefresh>
        );
    }
}

// 如果不传size,则默认size为10条
BaseList.defaultProps = {
    size: 10
};

export default BaseList;
