/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 16:23:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 16:24:10
 */
import { $post } from '@/packages/request';

export const getList = (params) => {
    return $post('/mock/14/demo/getList', params);
};
