'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Typography } from '@mui/material';

import BaseLayout from '../../components/BaseLayout';

import breadcrumb from './breadcrumb';
import menu from './menu';

export default function Overview() {
    const router = useRouter();

    return (
        <BaseLayout routes={{ breadcrumb, menu }}>
            <Typography>Overview</Typography>

            <Button variant="contained" onClick={() => router.push('/')}>
                Sair
            </Button>
        </BaseLayout>
    );
}
