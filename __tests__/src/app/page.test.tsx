import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AppRouterContextProvider from '../../../src/core/utils/test-utils/app-router-provider';

import mockPtBR from '../../../src/config/messages/pages/login/pt-BR.json';

import Home from '../../../src/app/page-temp-server';

describe('Deve renderizar a pagina de login corretamente', () => {
    beforeEach(() => {
        render(
            <AppRouterContextProvider router={{}} messages={mockPtBR}>
                <Home />
            </AppRouterContextProvider>
        );
    });

    it('Deve renderizar o input-email', () => {
        const getInput = screen.getByTestId('email');

        expect(getInput).toBeInTheDocument();
    });

    it('Deve renderizar o input-password', () => {
        const getInput = screen.getByTestId('password');

        expect(getInput).toBeInTheDocument();
    });

    it('Deve renderizar o submit', () => {
        const getInput = screen.getByTestId('entrar');

        expect(getInput).toBeInTheDocument();
    });
});
