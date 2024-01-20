import React, {createRef, useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Routes, useLocation} from "react-router-dom";

import '../styles.css'
import styles from '../Navigation.module.scss'
import {RouteType} from "../../../Types/Routes.ts";

type NavigationContentProps = {
    routes: {
        path: RouteType['path'],
        element: RouteType['element']
    }[]
}
export const Content = ({routes}: NavigationContentProps) => {

    const location = useLocation();
    const [currentKey, setCurrentKey] = useState<string | null>(null);

    useEffect(() => {
        setCurrentKey(location.pathname);
    }, [location.pathname]);

    return (

        <TransitionGroup style={{width: '100%', height: '100%'}}>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
            >
                <Routes location={location}>
                    {routes.map((r) => (
                        <Route key={`${r.path}-route`} path={r.path} element={
                            <CSSTransition
                                key={currentKey}
                                classNames="page"
                                timeout={300}
                            >
                                <div className={styles.content} key={r.path}>
                                    {r.element}
                                </div>
                            </CSSTransition>
                        }/>
                    ))}
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};
