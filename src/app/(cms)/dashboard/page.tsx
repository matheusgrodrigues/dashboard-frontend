'use client';

import React from 'react';

import { Stack, Typography } from '@mui/material';

import BaseLayout from '../../components/BaseLayout';

export default function Overview() {
    return (
        <BaseLayout headerTitle="Overview">
            <Stack display={'flex'} width={'100%'} justifyContent={'center'}>
                <Typography>Teste</Typography>
            </Stack>
        </BaseLayout>
    );
}
