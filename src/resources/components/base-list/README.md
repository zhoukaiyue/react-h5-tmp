<!--
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 14:22:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-05 11:24:05
-->

# 下拉刷新、滚动加载列表

## 何时使用

用户想看到新的数据时，可以上滑页面自动加载数据。同时支持下拉刷新接口。

## props

| 属性 |      说明      |  类型  | 默认值 |
| :--: | :------------: | :----: | :----: |
| req  | 构造请求(必传) | Object |        |
| size |  每页展示条数  | Number |   10   |

### props.req 说明

|  属性  |       说明       |        类型        | 默认值 |
| :----: | :--------------: | :----------------: | :----: |
|   fn   |   接口调用函数   | () => Promise<any> |   -    |
| params | 额外接口所需参数 |       Object       |   {}   |

## 使用方法

```javascript
// 引入组件
import BaseList from '@/resources/components/base-list';
import { getList } from '@/config/apis/list';
function DevBaseList() {
    /**
     * 下拉刷新滚动加载列表需要的参数
     * @param {Promise} fn 接口地址
     * @param {Object} params 其他参数
     */
    const req = {
        fn: getList,
        params: {
            id: '11'
        }
    };

    // eslint-disable-next-line no-undef
    return <BaseList req={req} size={9}></BaseList>;
}

export default DevBaseList;
```
