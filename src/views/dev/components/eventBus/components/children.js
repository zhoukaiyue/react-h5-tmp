/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:29:12
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:51:11
 */

import getRealPx from '@/utils/tools/get-realpx';
import Children from './find';
function DevEventBusChildren() {
    return (
        <div style={{ color: '#333', fontSize: `${getRealPx(32)}px` }}>
            <div style={{ margin: '20px 0' }}>我是子组件</div>
            <Children></Children>
        </div>
    );
}

export default DevEventBusChildren;
