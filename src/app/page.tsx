'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { TextField, Button, Stack, Grid } from '@mui/material';
import { LockClosedIcon } from '@heroicons/react/16/solid';

import BaseField from './components/BaseField';
import BaseForm, { FieldValues } from './components/BaseForm';

import formLoginRules from './rules';

export default function Home() {
    const router = useRouter();

    const handleSubmit = (data: FieldValues) => {
        router.push('/dashboard/overview');

        console.log('submit', data);
    };

    return (
        <Grid
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
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
                            <BaseField name="email">
                                <TextField data-testid="email" label="E-mail" />
                            </BaseField>

                            <BaseField name="password">
                                <TextField data-testid="password" label="Password" />
                            </BaseField>

                            <Button
                                data-testid="submit"
                                className="font-bold p-4 hover:bg-opacity-90 dark:bg-slate-600"
                                variant="contained"
                                type="submit"
                            >
                                Entrar
                            </Button>
                        </Stack>
                    </BaseForm>
                </Stack>
            </Grid>
        </Grid>
    );
}
