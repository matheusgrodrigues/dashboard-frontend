'use client';

import React, { useContext } from 'react';
import { useTranslations } from 'next-intl';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import LogoDevIcon from '@mui/icons-material/LogoDev';

import BaseButton from './components/BaseButton';
import BaseField from './components/BaseField';
import BaseForm, { BaseFormContext } from './components/BaseForm';

import { loginAction } from './lib/actions';

const SubmitButton: React.FC = () => {
    const t = useTranslations('login');

    const { submitButtonRef } = useContext(BaseFormContext);

    return (
        <BaseButton
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
            ref={submitButtonRef}
        />
    );
};

export default function LoginPage() {
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

                    <BaseForm initialState={null} formAction={loginAction}>
                        <Stack gap={4}>
                            <BaseField
                                render={
                                    <TextField
                                        data-testid={t('form.input.email.testID')}
                                        label={t('form.input.email.label')}
                                        name={t('form.input.email.name')}
                                        type="email"
                                    />
                                }
                            />

                            <BaseField
                                render={
                                    <TextField
                                        data-testid={t('form.input.password.testID')}
                                        label={t('form.input.password.label')}
                                        name={t('form.input.password.name')}
                                        type="password"
                                    />
                                }
                            />

                            <SubmitButton />
                        </Stack>
                    </BaseForm>
                </Stack>
            </Grid>
        </Grid>
    );
}
