/* eslint-disable react/no-unescaped-entities */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-05 14:41:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 15:10:00
 */

import FrameView from '@/layout/frame-view';
import getRealPx from '@/utils/tools/get-realpx';

function lodashjs() {
    return (
        <FrameView
            cont={
                <div style={{ padding: '20px 5px', fontSize: `${getRealPx(36)}px`, lineHeight: `${getRealPx(48)}px` }}>
                    项目中集成了 Lodash <a href='https://www.lodashjs.com/'>【官方文档】</a> 工具库。
                    <br />
                    <br />
                    <strong>强烈推荐按需引入方式使用</strong>
                    <br />
                    <br />
                    例子：
                    <br />
                    <div>引入：import isArray from "lodash/isArray";</div>
                    <div>使用：isArray([111])</div>
                </div>
            }
        ></FrameView>
    );
}

export default lodashjs;
