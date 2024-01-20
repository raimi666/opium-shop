import React, {createRef} from 'react';
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {LeftsideMenu} from "./LeftsideMenu/LeftsideMenu.tsx";
import {Content} from "./Content/Content.tsx";
import {Coming} from "../../pages/Coming/Coming.tsx";
import {Groups} from "../../pages/Groups/Groups.tsx";
import {Products} from "../../pages/Products/Products.tsx";
import {Users} from "../../pages/Users/Users.tsx";
import {Settings} from "../../pages/Settings/Settings.tsx";

import styles from './Navigation.module.scss'

const routes = [
    {path: '/', name: "navigation.coming", element: <Coming/>, nodeRef: createRef()},
    {path: '/groups', name: "navigation.groups", element: <Groups/>, nodeRef: createRef()},
    {path: '/products', name: "navigation.products", element: <Products/>, nodeRef: createRef()},
    {path: '/users', name: "navigation.users", element: <Users/>, nodeRef: createRef()},
    {path: '/settings', name: "navigation.settings", element: <Settings/>, nodeRef: createRef()},

]

const Navigation = () => {
    return (
        <Router>
            <div className={styles.navigation}>
                <div className={styles.navigationMenu}>
                    <LeftsideMenu routesParams={routes.map((r) => ({name: r.name, path: r.path}))}/>
                </div>
                <div className={styles.navigationWrapper}>
                    <Content routes={routes.map((r) => ({path: r.path, element: r.element}))}/>
                </div>
            </div>
        </Router>
    );
};

export default Navigation;
