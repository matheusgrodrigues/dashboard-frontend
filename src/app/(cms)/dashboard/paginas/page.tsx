'use client';

import { BaseLayoutContent } from '@/app/components/BaseLayout';

import breadcrumb from './breadcrumb';

export default function Paginas() {
    return (
        <BaseLayoutContent headerTitle="Paginas" breadcrumb={breadcrumb}>
            Paginas
        </BaseLayoutContent>
    );
}
