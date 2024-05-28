import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
    title: 'Overview',
};

interface DashboardLayoutProps {
    children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return <>{children}</>;
}
