import React from 'react';
import styles from './Header.module.scss'
import {RealtimeDate} from "./RealtimeDate/RealtimeDate.tsx";

type HeaderProps = {
    onSearch?: (text: string) => void
};
export const Header = ({onSearch}: HeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerIcon}>
                <img alt="icon" src="/logo.webp" />
                <span> INVENTORY </span>
            </div>
            <div>
                {
                    onSearch && <div> Search </div>
                }
            </div>
            <RealtimeDate/>
        </div>
    );
};
