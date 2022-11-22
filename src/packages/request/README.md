<!--
 * @Descripttion: 请求库使用说明
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-22 16:58:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-22 10:18:19
-->

## 基于 axios 二次封装的简约版请求库，该请求库默认支持一下功能：

-   请求重试 (请求错误时重新发送接口)
-   取消重复请求 (基于 CancelToken 实现)
-   Loading (使用 Vant Toast.loading 实现)

## 创建一个请求

### 新建一个 js 文件，并引入相关 api

```js
import { $post } from '@/packages/request';

// 普通用法
export const getListDev = (params: any): Promise<any> => {
    return $post('/mock/14/demo/getList', params);
};

// 自定义配置
export const getListDev = (params: any): Promise<any> => {
    return $post('/mock/14/demo/getList', params, {
        enableCancelModel: false //针对该接口关闭"取消重复请求模式"
        retryDelay: 4000, //当前请求重试间隔设置为4秒
        retryFrequency: 2 //当前请求重试次数（重试频率）2次
    });
};
```

## 请求库 API

| 参数   | 说明                                                 | 类型   | 默认值 |
| ------ | ---------------------------------------------------- | ------ | ------ |
| url    | 是用于请求的服务器 URL (必传)                        | string | -      |
| params | 是作为请求主体被发送的数据(结合自己实际业务，非必传) | object | -      |
| config | 指定的配置(结合自己实际业务，非必传)                 | object | {}     |
