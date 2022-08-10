/*
 * @Descripttion: Redux Store cros
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-09 23:42:51
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:04:32
 */
import { configureStore } from '@reduxjs/toolkit';

// 切片导入（单个功能的 Redux reducer 逻辑和 action 的集合）
import devReducer from '@/config/store/dev/index.js';

export const store = configureStore({
    // Redux 切片（Slice）
    reducer: {
        dev: devReducer
    }
});
