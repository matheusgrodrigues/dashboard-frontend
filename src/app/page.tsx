'use client';

import React, { useActionState, useOptimistic, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import LogoDevIcon from '@mui/icons-material/LogoDev';

import BaseForm from '../components/BaseForm';

import { getRoute } from '../core/utils/routes';
import { loginAction, loginActionV2 } from './actions';

import formLoginRules from './rules';
import { useFormState, useFormStatus } from 'react-dom';

const Enviando: React.FC = () => {
    const { pending } = useFormStatus();

    return <p style={{ color: 'white' }}>{pending && 'Enviando...'}</p>;
};

interface InitialLoginValues {
    email: string;
    password: string;
}

export default function Home() {
    const t = useTranslations('login');

    const [message, setMessage] = useState({
        text: 'Optmistic Message',
        sending: false,
    });

    const [optmisticMessage, addOptimisticMessage] = useOptimistic<typeof message, string>(
        message,
        (currentState, newState) => ({
            ...currentState,
            text: newState,
            sending: true,
        })
    );

    // TODO: quando lançar o react 19, mudar para useActionState
    const [state, formAction] = useFormState(loginActionV2, null);

    console.log(state);
    return (
        <Grid
            className="bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            container
            display={'flex'}
        >
            <Grid
                className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark"
                item
                xs={11}
                sm={8}
                md={6}
                lg={3}
                sx={{
                    backgroundColor: 'background.default',
                }}
            >
                <Stack padding={4} gap={4}>
                    <LogoDevIcon className="text-blue-600 dark:text-slate-600 size-16 mx-auto" />

                    <form action={formAction}>
                        <Stack gap={4}>
                            <TextField
                                data-testid={t('form.input.email.testID')}
                                label={t('form.input.email.label')}
                                name={t('form.input.email.name')}
                                type="email"
                            />
                            <TextField
                                data-testid={t('form.input.password.testID')}
                                label={t('form.input.password.label')}
                                name={t('form.input.password.name')}
                                type="password"
                            />

                            <Button
                                data-testid={t('form.button.entrar.testID')}
                                className="font-bold p-4"
                                variant="contained"
                                type="submit"
                            >
                                {t('form.button.entrar.label')}
                            </Button>

                            <p style={{ color: 'white' }}>
                                {optmisticMessage.text}
                                {optmisticMessage.sending && <small>Sending...</small>}
                            </p>

                            <Enviando />
                        </Stack>
                    </form>
                </Stack>
            </Grid>
        </Grid>
    );
}
