/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-09 23:42:51
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 10:31:21
 */
import { configureStore } from '@reduxjs/toolkit';

import index1 from '@/config/redux/index.js';
console.log(index1);
export const store = configureStore({
    reducer: {
        counter: index1
    }
});
