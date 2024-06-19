import React from 'react';

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export interface AppRouterTestProviderProviderProps {
    children: React.ReactNode;
    router: Partial<AppRouterInstance>;
    messages?: AbstractIntlMessages;
}

const AppRouterTestProvider = ({ children, router, messages }: AppRouterTestProviderProviderProps): React.ReactNode => {
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
            <NextIntlClientProvider locale="pt-BR" messages={messages}>
                {children}
            </NextIntlClientProvider>
        </AppRouterContext.Provider>
    );
};

export default AppRouterTestProvider;
