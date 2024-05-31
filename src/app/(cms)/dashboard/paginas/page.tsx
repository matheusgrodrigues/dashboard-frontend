'use client';

import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { GridColDef, GridRowsProp, DataGrid } from '@mui/x-data-grid';

import { BaseLayoutContent } from '../../../../app/components/BaseLayout';

import breadcrumb from './breadcrumb';

export default function Paginas() {
    const t = useTranslations('paginas');

    const rows: GridRowsProp = useMemo(
        () => [
            { id: 1, col1: 'Hello', col2: 'World' },
            { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
            { id: 3, col1: 'MUI', col2: 'is Amazing' },
        ],
        []
    );

    const columns: GridColDef[] = useMemo(
        () => [
            { field: 'col1', headerName: 'Column 1', width: 150 },
            { field: 'col2', headerName: 'Column 2', width: 150 },
        ],
        []
    );

    return (
        <BaseLayoutContent headerTitle={t('baseLayoutContent.headerTitle')} breadcrumb={breadcrumb}>
            <DataGrid rows={rows} columns={columns} />
        </BaseLayoutContent>
    );
}
