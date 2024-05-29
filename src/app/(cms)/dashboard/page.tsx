'use client';

import React from 'react';

import { Stack, Typography } from '@mui/material';

import { BaseLayoutContent } from '../../components/BaseLayout';

import breadcrumb from './breadcrumb';

export default function Dashboard() {
    return (
        <BaseLayoutContent headerTitle="Dashboard" breadcrumb={breadcrumb}>
            <Stack display={'flex'} width={'100%'} justifyContent={'center'}>
                <Typography>Teste</Typography>
            </Stack>
        </BaseLayoutContent>
    );
}
