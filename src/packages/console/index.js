/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-12 16:10:17
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 16:33:06
 */
// 由于 vconsole 包比较大，仅在test环境下开启，生产环境请谨慎开启。
import VConsole from 'vconsole';
if (process.env.REACT_APP_MODE === 'test') {
    // 配置参考https://github.com/Tencent/vConsole/blob/HEAD/doc/tutorial.md
    // or init with options
    // eslint-disable-next-line no-unused-vars, no-new
    new VConsole();
}
