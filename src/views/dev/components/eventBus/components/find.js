/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:29:26
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 13:46:07
 */
import React from 'react';
// 引入event文件,这里的eventBus是一个事件总线;  getRealPx是一个方法，用于获取真实的px
import { eventBus, getRealPx } from '@/utils/tools';

function DevEventBusFind() {
    const [_msg, setN] = React.useState(''); // 1.初始值
    eventBus.addListener('change', (msg) => {
        setN(msg);
    });
    return (
        <div style={{ color: '#333', fontSize: `${getRealPx(32)}px` }}>
            我是孙组件
            <br />
            <span>这是我接收到祖父的传值：{_msg}</span>
        </div>
    );
}

export default DevEventBusFind;
