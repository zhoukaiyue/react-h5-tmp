/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-24 15:06:03
 */
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';

function Err404() {
    const Err404Tmp = (
        <div className='con'>
            <div className='bg'></div>
            <p className='text'> 抱歉，您访问的内容不存在～</p>
        </div>
    );
    return <FrameView className={styles.err404_page} cont={Err404Tmp}></FrameView>;
}

export default Err404;
