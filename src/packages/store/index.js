/*
 * @Descripttion: Redux Store cros
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-09 23:42:51
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 14:02:21
 */
import { configureStore } from '@reduxjs/toolkit';
// 导入modules（切片）
import { modules } from './modules';

export const store = configureStore({
    // Redux 切片（Slice）
    reducer: {
        ...modules
    }
});
