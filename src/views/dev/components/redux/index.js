/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 10:34:20
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:08:55
 */
import './index.scss';
import FrameView from '@/layout/frame-view';

import { useSelector, useDispatch } from 'react-redux';
import { add, reduce, decrease } from '@/config/store/dev/index.js';

function DevRedux() {
    // 使用 useSelector 提取数据
    const count = useSelector((state) => state.dev.value);
    // 使用 useDispatch 来 dispatch action
    const dispatch = useDispatch();
    return (
        <FrameView
            className='dev-redux'
            cont={
                <div>
                    <input value={count} readOnly={true} />
                    <br />
                    <button aria-label='Increment value' onClick={() => dispatch(add())}>
                        增加
                    </button>
                    <button aria-label='Decrement value' onClick={() => dispatch(reduce())}>
                        减少
                    </button>
                    <button aria-label='Decrement value' onClick={() => dispatch(decrease(10))}>
                        步进
                    </button>
                </div>
            }
        ></FrameView>
    );
}

export default DevRedux;
