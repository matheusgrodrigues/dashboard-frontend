'use client';

import { useRouter } from 'next/navigation';

import { Button, Typography } from '@mui/material';

import BaseLayout from '@/app/components/BaseLayout';

import menuRoutes from './menu';

export default function Overview() {
    const router = useRouter();

    return (
        <BaseLayout routes={{ menuRoutes }}>
            <Typography>Overview</Typography>

            <Button variant="contained" onClick={() => router.push('/')}>
                Sair
            </Button>
        </BaseLayout>
    );
}
