'use client';

import React, { useContext } from 'react';

import { Stack, Typography } from '@mui/material';

import { useTranslations } from 'next-intl';

import { BaseLayoutContent } from './components/BaseLayout';

import breadcrumb from './lib/breadcrumb';

import { SessionProviderContext } from '../../../core/providers/SessionProvider';

export default function Dashboard() {
    const t = useTranslations('dashboard');

    const { session } = useContext(SessionProviderContext);

    console.log('Dashboard', session);

    return (
        <BaseLayoutContent headerTitle={t('baseLayoutContent.headerTitle')} breadcrumb={breadcrumb}>
            <Stack display={'flex'} width={'100%'} justifyContent={'center'}>
                <Typography variant="h2">{t('baseLayoutContent.typography')}</Typography>
            </Stack>
        </BaseLayoutContent>
    );
}
