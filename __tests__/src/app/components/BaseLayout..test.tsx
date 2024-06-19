import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AppRouterContextProvider from '../../../../src/core/utils/test-utils/app-router-provider';

import BaseLayout from '../../../../src/components/BaseLayout';

import mockPtBR from '../../../../src/config/messages/components/baseLayout/pt-BR.json';

describe('Deve renderizar o BaseLayout corretamente', () => {
    beforeEach(() =>
        render(
            <AppRouterContextProvider router={{}} messages={mockPtBR}>
                <BaseLayout>{''}</BaseLayout>
            </AppRouterContextProvider>
        )
    );

    describe('Deve renderizar o AppBar corretamente', () => {
        it('Deve renderizar o AppBar', () => {
            const getAppBar = screen.getByTestId('appBar');

            expect(getAppBar).toBeInTheDocument();
        });

        it('Deve renderizar o ToggleTheme', () => {
            const getToggleTheme = screen.getByTestId('changeTheme');

            expect(getToggleTheme).toBeInTheDocument();
        });

        it('Deve renderizar o UserMenu', () => {
            const getUserMenu = screen.getByTestId('userMenu');

            expect(getUserMenu).toBeInTheDocument();
        });
    });

    describe('Deve renderizar o Drawer corretamente', () => {
        it('Deve renderizar o Drawer', () => {
            const getDrawer = screen.getByTestId('drawer');

            expect(getDrawer).toBeInTheDocument();
        });

        it('Deve renderizar o layout-content', () => {
            const getLayoutContent = screen.getByTestId('layout-content');

            expect(getLayoutContent).toBeInTheDocument();
        });
    });
});
