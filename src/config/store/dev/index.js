/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 10:03:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 11:13:41
 */
import { createSlice } from '@reduxjs/toolkit';

export const dev = createSlice({
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

// 导出生成的 slice reducer 和 action creators
export const { add, reduce, decrease } = dev.actions;
export default dev.reducer;
