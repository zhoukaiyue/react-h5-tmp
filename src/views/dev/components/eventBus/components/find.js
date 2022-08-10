/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:29:26
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:52:45
 */
import React from 'react';
import getRealPx from '@/utils/tools/get-realpx';
// 引入event文件
import eventBus from '@/utils/tools/eventBus';

function DevEventBusFind() {
    const [_msg, setN] = React.useState(''); // 1.初始值
    eventBus.addListener('change', (msg) => {
        setN(msg);
    });
    return (
        <div style={{ color: '#333', fontSize: `${getRealPx(32)}px` }}>
            我是孙组件
            <br />
            <span>这是我接收到祖父的传呼：{_msg}</span>
        </div>
    );
}

export default DevEventBusFind;
