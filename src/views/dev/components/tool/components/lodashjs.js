/* eslint-disable react/no-unescaped-entities */
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-05 14:41:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-09 11:47:07
 */

import FrameView from '@/layout/frame-view';
function lodashjs() {
    const styles = {
        container: {
            padding: '24px'
        }
    };
    return (
        <FrameView
            cont={
                <div className='dev-tool-lodashjs-cont' style={styles.container}>
                    <strong>*强烈推荐按需引入方式使用</strong>
                    <p>
                        <br />
                    </p>
                    <div>
                        <p>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&lt;</span>
                            <span style={{ color: 'rgb(224, 108, 117)' }}>script</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                            <span style={{ color: 'rgb(209, 154, 102)' }}>setup</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                            <span style={{ color: 'rgb(209, 154, 102)' }}>lang</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>=</span>
                            <span style={{ color: 'rgb(152, 195, 121)' }}>"ts"</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&gt;</span>
                        </p>
                        <p>
                            <span style={{ color: 'rgb(198, 120, 221)' }}>&nbsp; &nbsp;import</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                            <span style={{ color: 'rgb(224, 108, 117)' }}>isArray</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                            <span style={{ color: 'rgb(198, 120, 221)' }}>from</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp;</span>
                            <span style={{ color: 'rgb(152, 195, 121)' }}>'lodash/isArray'</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>;</span>
                        </p>
                        <p>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&nbsp; &nbsp;</span>
                            <span style={{ color: 'rgb(97, 175, 239)' }}>isArray</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>([</span>
                            <span style={{ color: 'rgb(209, 154, 102)' }}>111</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>)</span>
                            <span style={{ color: 'rgb(198, 120, 221)' }}>&nbsp;?&nbsp;</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}></span>
                            <span style={{ color: 'rgb(152, 195, 121)' }}>'是数组'</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}></span>
                            <span style={{ color: 'rgb(198, 120, 221)' }}>&nbsp;:&nbsp;</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}></span>
                            <span style={{ color: 'rgb(152, 195, 121)' }}>'不是数组'</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>;</span>
                        </p>
                        <p>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&lt;/</span>
                            <span style={{ color: 'rgb(224, 108, 117)' }}>script</span>
                            <span style={{ color: 'rgb(171, 178, 191)' }}>&gt;</span>
                        </p>
                    </div>
                </div>
            }
        ></FrameView>
    );
}

export default lodashjs;
