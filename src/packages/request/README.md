<!--
 * @Descripttion: 请求库使用说明
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-22 16:58:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-09 17:02:57
-->

## 基于 axios 二次封装的简约版请求库，该请求库默认支持一下功能：

-   请求重试 (请求错误时重新发送接口)
-   取消重复请求 (基于 CancelToken 实现)
-   Loading (使用 ad Toast.loading 实现)
-   http 错误状态码处理 (借助 ad 的 Modal 弹窗组件来提示信息)

## 创建一个请求，下面是创建一个 post 请求。

### 新建一个 ts 文件，并引入相关 axios 实例方法

```ts
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

## 请求库 options

### 全局自定义配置，它将作用于每个请求。（在请求库配置文件中设置即可）

| 参数               | 说明                                                          | 类型    | 默认值 |
| ------------------ | ------------------------------------------------------------- | ------- | ------ |
| enableCancelModel  | 是否开启取消重复请求模式                                      | boolean | true   |
| enableRetryModel   | 是否开启请求重试模式                                          | boolean | true   |
| enableErrorMessage | 是否开启接口错误信息展示功能                                  | boolean | true   |
| retryConfig        | 全局的请求重试相关配置,仅在 enableRetryModel 为 true 时起作用 | object  | -      |

#### retryConfig

| 参数      | 说明                 | 类型   | 默认值 |
| --------- | -------------------- | ------ | ------ |
| frequency | 重试次数（重试频率） | number | 3      |
| delay     | 延迟时间             | number | 3000   |

### 请求配置（创建请求时可以用的配置选项）

| 参数   | 说明                                                 | 类型   | 默认值 |
| ------ | ---------------------------------------------------- | ------ | ------ |
| url    | 是用于请求的服务器 URL (必传)                        | string | -      |
| params | 是作为请求主体被发送的数据(结合自己实际业务，非必传) | object | -      |
| config | 指定的配置(结合自己实际业务，非必传)                 | object | {}     |

#### config（以下仅仅只是部分新增的自定义配置，更多的配置请参考 axios 官方定义）

| 参数               | 说明                         | 类型    | 默认值 |
| ------------------ | ---------------------------- | ------- | ------ |
| enableCancelModel  | 是否开启取消重复请求模式     | boolean | -      |
| enableRetryModel   | 是否开启请求重试模式         | boolean | -      |
| enableErrorMessage | 是否开启接口错误信息展示功能 | boolean | -      |
| retryFrequency     | 重试次数（重试频率）         | number  | -      |
| retryDelay         | 延迟时间                     | number  | -      |
