/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 10:03:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 14:03:48
 */
import { createSlice } from '@reduxjs/toolkit';

const dev = createSlice({
    name: 'dev',
    // 初始状态
    initialState: {
        value: 0
    },
    // `reducers` 字段让我们定义 reducers 并生成关联的操作
    reducers: {
        add: (state) => {
            state.value += 1;
        },
        reduce: (state) => {
            state.value -= 1;
        },
        decrease: (state, action) => {
            state.value += action.payload;
        }
    }
});

// 导出 action 和 reducer
export const { add, reduce, decrease } = dev.actions;
export default {
    dev: dev.reducer
};
