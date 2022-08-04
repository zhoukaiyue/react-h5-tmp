/*
 * @Descripttion: 请求库默认loading
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 17:36:23
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 17:59:17
 */
import { Toast } from 'antd-mobile';

// 计数
let COUNT = 0;

const laoding = {
    show() {
        if (COUNT === 0) {
            Toast.show({
                duration: 0,
                icon: 'loading',
                content: '加载中…'
            });
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) Toast.clear();
    }
};

export default laoding;
