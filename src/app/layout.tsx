import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import './globals.css';

import ThemeProvider from '../core/utils/theme-utils/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login',
    description: '',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
    const locale = 'pt-BR';
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <AppRouterCacheProvider options={{ enableCssLayer: false }}>
                    <CssBaseline />

                    <ThemeProvider>
                        <NextIntlClientProvider messages={messages} locale={locale}>
                            {children}
                        </NextIntlClientProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
