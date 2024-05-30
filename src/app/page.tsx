'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { TextField, Button, Stack, Grid } from '@mui/material';
import { LockClosedIcon } from '@heroicons/react/16/solid';

import BaseField from './components/BaseField';
import BaseForm, { FieldValues } from './components/BaseForm';

import { getRoute } from '../core/utils/routes';

import formLoginRules from './rules';

export default function Home() {
    const router = useRouter();

    const t = useTranslations('login');

    const handleSubmit: (data: FieldValues) => void = () => router.push(getRoute('dashboard').path);

    return (
        <Grid
            className="bg-gray-900 bg-cover bg-no-repeat"
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
                className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
                item
                xs={11}
                sm={8}
                md={6}
                lg={3}
            >
                <Stack padding={4} gap={4}>
                    <LockClosedIcon className="text-blue-600 dark:text-slate-600 size-16 mx-auto" />

                    <BaseForm validationSchema={formLoginRules} onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            <BaseField name={t('form.input.email.name')}>
                                <TextField
                                    data-testid={t('form.input.email.testID')}
                                    label={t('form.input.email.label')}
                                    type="email"
                                />
                            </BaseField>

                            <BaseField name={t('form.input.password.name')}>
                                <TextField
                                    data-testid={t('form.input.password.testID')}
                                    label={t('form.input.password.label')}
                                    type="password"
                                />
                            </BaseField>

                            <Button
                                data-testid={t('form.button.entrar.testID')}
                                className="hover:bg-opacity-90 dark:bg-slate-600 font-bold p-4"
                                variant="contained"
                                type="submit"
                            >
                                {t('form.button.entrar.label')}
                            </Button>
                        </Stack>
                    </BaseForm>
                </Stack>
            </Grid>
        </Grid>
    );
}
