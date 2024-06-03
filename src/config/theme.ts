'use client';

import { PaletteMode } from '@mui/material';

/*
    // TODO: remover comentarios quando ajustar os hexadecimal
    --gray-0: #000;
    --gray-1: #0e1013;
    --gray-2: #1b1d20;
    --gray-3: #222326;
    --gray-4: #606163;
    --gray-5: #b0b2b3;
    --gray-7: #fff;

    // titulos
    h1: #ffffff; -> Rubik sans serif -> normal
    subtitle: #b0b2b3 -> IBMPlexMono italic

*/

const lightColor = {
    background: {
        default: '#ffffff',
        paper: '#f7f7f7',
    },
    text: {
        primary: '#000000',
        secondary: '#606163',
        disabled: '#b0b2b3',
    },
};

const darkColor = {
    background: {
        default: '#0e1013',
        paper: '#1b1d20',
    },
    text: {
        primary: '#ffffff',
        secondary: '#b0b2b3',
        disabled: '#606163',
    },
};

const getTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: '#aa88ff',
            light: '#aa88ff',
            dark: '#7000ef',
        },
        secondary: {
            main: '#00d0f7',
            dark: '#d100ff',
        },
        error: {
            main: '#ff0000',
        },
        warning: {
            main: '#ffe400',
            light: '#ffe400',
            dark: '#ff9300',
        },
        success: {
            main: '#00c300',
            light: '#b1f400',
        },
        info: {
            main: '#0068e1',
            light: '#00d0f7',
            dark: '#0068e1',
        },
        divider: '#222326',

        ...(mode === 'light' ? lightColor : darkColor),
    },
    typography: {
        fontFamily: ['"Rubik", sans-serif', '"IBM Plex Mono", monospace'].join(','),

        h1: {
            fontFamily: '"Rubik", sans-serif',
        },
        h2: {
            fontFamily: '"Rubik", sans-serif',
        },
        h3: {
            fontFamily: '"Rubik", sans-serif',
        },
        h4: {
            fontFamily: '"Rubik", sans-serif',
        },
        h5: {
            fontFamily: '"Rubik", sans-serif',
        },
        h6: {
            fontFamily: '"Rubik", sans-serif',
        },

        subtitle1: {
            fontFamily: '"IBM Plex Mono", monospace',
        },
        subtitle2: {
            fontFamily: '"IBM Plex Mono", monospace',
        },
    },
});

export default getTheme;
