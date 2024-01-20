import React from 'react';
import './App.scss';

import {darkTheme, lightTheme} from './utils/theme.ts'

import {Header} from "./components/Header/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
const App: React.FC = () => {

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <div className="App">
                <Header/>
                <Navigation />
            </div>
        </ThemeProvider>
    );
}

export default App;
