import {createTheme, Theme, ThemeOptions} from '@mui/material/styles';
import { red } from '@mui/material/colors';


const globalStyles: ThemeOptions = {
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#2C3A47'
                },
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: '#f1f2f6',
                    '&:before': {
                        borderColor: '#5bb433',
                    },
                    '&:after': {
                        borderColor: '#5bb433',
                    },
                },
            }
        },
    },
}
export const lightTheme = createTheme({
    ...globalStyles,
    palette: {
        mode: 'light',
        primary: {
            main: '#5bb433',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        }
    }
});

export const darkTheme = createTheme({
    ...globalStyles,
    palette: {
        mode: 'dark',
        primary: {
            main: '#5bb433',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

