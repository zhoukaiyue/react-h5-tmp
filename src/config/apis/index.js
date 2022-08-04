/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 15:25:39
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 15:28:54
 */
import { $post } from '@/packages/request';

export const getqQeryActInfo = (params) => {
    return $post('/mock/5/signup-web/queryActInfo', params);
};
