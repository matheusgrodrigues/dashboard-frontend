import { Metadata } from 'next';

import React from 'react';

import { auth } from '../../../auth';

import SessionProvider from '../../../core/providers/SessionProvider';

import BaseLayout from '../../../components/BaseLayout';

export const metadata: Metadata = {
    title: 'Overview',
};

interface DashboardLayoutProps {
    children: React.ReactNode;
}
export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <BaseLayout>{children}</BaseLayout>
        </SessionProvider>
    );
}
