'use client';

import React, { createContext, useCallback, useLayoutEffect, useMemo } from 'react';

import { ThemeProvider as MUIThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

import getTheme from '../../../config/theme';

interface ThemeProviderContextProps {
    toggleTheme: () => void;
}

export const ThemeProviderContext = createContext({} as ThemeProviderContextProps);

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = React.useState<Theme>('light');

    let theme = useMemo(() => createTheme(getTheme(mode)), [mode]);
    theme = responsiveFontSizes(theme);

    const toggleTheme = useCallback(() => {
        setMode((prevMode) => {
            if (prevMode === 'light') {
                localStorage.setItem('theme', 'dark');

                return 'dark';
            } else {
                localStorage.setItem('theme', 'light');

                return 'light';
            }
        });
    }, []);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            setMode(() => localStorage.getItem('theme') as Theme);
        }
    }, []);

    return (
        <ThemeProviderContext.Provider
            value={{
                toggleTheme,
            }}
        >
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </ThemeProviderContext.Provider>
    );
};

export default ThemeProvider;
