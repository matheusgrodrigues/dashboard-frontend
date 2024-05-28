import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AppRouterContextProvider from '../../../../src/core/utils/test-utils/app-router-provider';

import Overview from '../../../../src/app/(cms)/dashboard/page';

describe('Deve renderizar o BaseLayout corretamente', () => {
    beforeEach(() =>
        render(
            <AppRouterContextProvider router={{}}>
                <Overview />
            </AppRouterContextProvider>
        )
    );

    describe('Deve renderizar o AppBar corretamente', () => {
        it('Deve renderizar o AppBar', () => {
            const getAppBar = screen.getByTestId('appBar');

            expect(getAppBar).toBeInTheDocument();
        });

        it('Deve renderizar o componente ChangeLanguage', () => {
            const getChangeLanguage = screen.getByTestId('changeLanguage');

            expect(getChangeLanguage).toBeInTheDocument();
        });

        it('Deve renderizar o componente ToggleTheme', () => {
            const getToggleTheme = screen.getByTestId('changeTheme');

            expect(getToggleTheme).toBeInTheDocument();
        });

        it('Deve renderizar o componente UserMenu', () => {
            const getUserMenu = screen.getByTestId('userMenu');

            expect(getUserMenu).toBeInTheDocument();
        });
    });
});
