/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-06-09 11:56:28
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-24 15:09:33
 */
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { NoticeBar } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
function DevTool() {
    const navigate = useNavigate();
    const findRouterList = [
        {
            path: '/dev/tool/lodashjs',
            label: 'JavaScript | lodashjs库的使用'
        }
    ];

    return (
        <FrameView
            className={styles.dev_tool}
            cont={
                <div style={{ color: '#333' }}>
                    <NoticeBar content='脚手架已经集成的工具库' color='alert' />
                    <div className='nav'>
                        {findRouterList.map((item, index) => {
                            return (
                                <div
                                    className='nav__block'
                                    key={index}
                                    onClick={() => {
                                        navigate(item.path);
                                    }}
                                >
                                    <span> {item.label}</span>
                                    <RightOutline style={{ fontSize: 16 }} color={'#B6C3D2'} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        ></FrameView>
    );
}

export default DevTool;
