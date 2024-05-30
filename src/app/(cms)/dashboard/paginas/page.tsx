'use client';

import { useTranslations } from 'next-intl';

import { BaseLayoutContent } from '../../../../app/components/BaseLayout';

import breadcrumb from './breadcrumb';

export default function Paginas() {
    const t = useTranslations('paginas');

    return (
        <BaseLayoutContent headerTitle={t('baseLayoutContent.headerTitle')} breadcrumb={breadcrumb}>
            {t('baseLayoutContent.typography')}
        </BaseLayoutContent>
    );
}
