'use client';

import React from 'react';

import { Stack, Typography } from '@mui/material';

import { useTranslations } from 'next-intl';

import { BaseLayoutContent } from '../../components/BaseLayout';

import breadcrumb from './breadcrumb';

export default function Dashboard() {
    const t = useTranslations('dashboard');

    return (
        <BaseLayoutContent headerTitle={t('baseLayoutContent.headerTitle')} breadcrumb={breadcrumb}>
            <Stack display={'flex'} width={'100%'} justifyContent={'center'}>
                <Typography variant="h2">{t('baseLayoutContent.typography')}</Typography>
            </Stack>
        </BaseLayoutContent>
    );
}
