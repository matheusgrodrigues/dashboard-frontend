'use client';

import { useRouter } from 'next/navigation';

import { Button, Typography } from '@mui/material';

import BaseLayout from '@/app/components/BaseLayout';

export default function Overview() {
    const router = useRouter();

    return (
        <BaseLayout>
            <Typography>Overview</Typography>

            <Button variant="contained" onClick={() => router.push('/')}>
                Sair
            </Button>
        </BaseLayout>
    );
}
