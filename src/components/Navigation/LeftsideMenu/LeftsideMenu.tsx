import React, {useCallback, useEffect, useMemo} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

import styles from '../Navigation.module.scss'
import * as classNames from "classnames";
import {Avatar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

type LeftsideMenuProps = {
    routesParams: {
        path: string,
        name: string
    }[]
}
export const LeftsideMenu = ({routesParams}: LeftsideMenuProps) => {

    const { t } = useTranslation()
    const location = useLocation();

    const links = useCallback(() => {
        return (
            !!routesParams.length &&
            routesParams.map((r) => (
                <Link
                    className={classNames(
                        styles.link,
                        location.pathname === r.path ? styles.linkSelected : null
                    )}
                    key={`${r.path}-link`}
                    to={r.path}
                >
                    {t(r.name)}
                </Link>
            ))
        );
    }, [routesParams, t, location.pathname]);

    return <nav>
        <div style={{position: 'relative', margin: '3rem 0'}}>
            <Avatar
                sx={{ width: 100, height: 100 }}
                src='https://media.licdn.com/dms/image/D4E35AQESSYQOwj9rDA/profile-framedphoto-shrink_200_200/0/1680343478380?e=1706065200&v=beta&t=JzHl5SxC8e9nVKH0JXAIV72lwXWTGF4e776s5i4KiN4'
            />
            <Avatar className={styles.navigationMenuSettings} sx={{ position: 'absolute', bottom: '-.3rem', right: '-.3rem', width: 45, height: 45, background: '#ffffff' }}>
                <SettingsIcon fontSize='small' sx={{color: '#9B9A9AFF'}}/>
            </Avatar>
        </div>
        {links()}
    </nav>;
};
