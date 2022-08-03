<!--
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 14:22:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-03 17:52:57
-->

# layOut 布局组件

## props

|    属性    |      说明       |   类型    | 默认值 |
| :--------: | :-------------: | :-------: | :----: |
| className  | 自定义 class 类 |  string   |   -    |
| showTabbar | 是否显示 Tabbar |  boolean  | false  |
|    cont    |      内容       | ReactNode |   -    |

## 使用方法

```javascript
// 引入组件
import FrameView from "@/layout/frame-view"

function Page() {
    return <FrameView className="Page" cont={<div>{/* code */}</div>}></FrameView>
}
export default Page
```
