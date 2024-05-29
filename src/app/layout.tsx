import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { getMessages } from 'next-intl/server';

import theme from '../config/theme';

import { NextIntlClientProvider } from 'next-intl';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '',
    description: '',
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
    const messages = await getMessages({ locale: 'pt-BR' });

    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <AppRouterCacheProvider options={{ enableCssLayer: false }}>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
