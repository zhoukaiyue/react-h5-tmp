/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-24 14:59:36
 */
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
function Index() {
    const navigate = useNavigate();
    return (
        <FrameView
            className={styles.index}
            cont={
                <Button
                    shape='default'
                    color='primary'
                    onClick={() => {
                        navigate('/dev');
                    }}
                >
                    开发者中心
                </Button>
            }
        ></FrameView>
    );
}

export default Index;
