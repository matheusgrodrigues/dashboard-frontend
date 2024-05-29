import React from 'react';

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { NextIntlClientProvider } from 'next-intl';

import mockPtBR from '../../../config/messages/pages/login/pt-BR.json';

export interface AppRouterContextProviderProps {
    children: React.ReactNode;
    router: Partial<AppRouterInstance>;
}

const AppRouterContextProvider = ({ children, router }: AppRouterContextProviderProps): React.ReactNode => {
    const mockedRouter: AppRouterInstance = {
        prefetch: jest.fn(),
        forward: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
        back: jest.fn(),
        push: jest.fn(),
        ...router,
    };
    return (
        <AppRouterContext.Provider value={mockedRouter}>
            <NextIntlClientProvider locale="pt-BR" messages={mockPtBR}>
                {children}
            </NextIntlClientProvider>
        </AppRouterContext.Provider>
    );
};

export default AppRouterContextProvider;
