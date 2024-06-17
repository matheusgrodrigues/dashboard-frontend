'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import LogoDevIcon from '@mui/icons-material/LogoDev';

import BaseButtonFormServer from '../components/BaseButton';
import BaseFieldServer from '../components/BaseField';
import BaseFormServer from '../components/BaseForm';

import { loginAction } from './actions';

export default function Home() {
    const t = useTranslations('login');

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

                    <BaseFormServer initialState={null} formAction={loginAction}>
                        <Stack gap={4}>
                            <BaseFieldServer
                                render={
                                    <TextField
                                        data-testid={t('form.input.email.testID')}
                                        label={t('form.input.email.label')}
                                        name={t('form.input.email.name')}
                                        type="email"
                                    />
                                }
                            />

                            <BaseFieldServer
                                render={
                                    <TextField
                                        data-testid={t('form.input.password.testID')}
                                        label={t('form.input.password.label')}
                                        name={t('form.input.password.name')}
                                        type="password"
                                    />
                                }
                            />

                            <BaseButtonFormServer
                                render={
                                    <Button
                                        data-testid={t('form.button.entrar.testID')}
                                        className="font-bold p-4"
                                        variant="contained"
                                        type="submit"
                                    >
                                        {t('form.button.entrar.label')}
                                    </Button>
                                }
                            />
                        </Stack>
                    </BaseFormServer>
                </Stack>
            </Grid>
        </Grid>
    );
}
