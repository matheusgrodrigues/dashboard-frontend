'use client';

import { useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import EditIcon from '@mui/icons-material/Edit';

import { BaseLayoutContent } from '../../../../app/components/BaseLayout';

import breadcrumb from './breadcrumb';
import { getRoute } from '@/core/utils/routes';

export default function Paginas() {
    const router = useRouter();

    const t = useTranslations('paginas');

    const columns: GridColDef[] = useMemo(
        () => [
            {
                headerClassName: 'bg-slate-200',
                headerName: 'Nome da Página',
                field: 'col1',
                width: 150,
            },
            { headerClassName: 'bg-slate-200', headerName: 'Atividade', width: 200, field: 'col2' },
            {
                headerClassName: 'bg-slate-200',
                headerName: 'Status',
                renderCell: ({ row }) => {
                    return (
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                            {row.col1 === 'Contato' ? (
                                <Chip variant="outlined" label="Offline" color="error" />
                            ) : (
                                <Chip variant="outlined" label="Online" color="success" />
                            )}

                            <IconButton onClick={() => router.push(`${getRoute('paginas').path}/${row.col1}`)}>
                                <EditIcon />
                            </IconButton>
                        </Box>
                    );
                },
                field: 'col3',
                width: 150,
            },
        ],
        [router]
    );

    const rows: GridRowsProp = useMemo(
        () => [
            {
                id: 1,
                col1: 'Home',
                col2: '31 de maio de 2024',
            },
        ],

        []
    );

    return (
        <BaseLayoutContent headerTitle={t('baseLayoutContent.headerTitle')} breadcrumb={breadcrumb}>
            <DataGrid
                disableMultipleRowSelection
                disableRowSelectionOnClick
                disableDensitySelector
                disableColumnSelector
                disableColumnSorting
                disableColumnFilter
                disableColumnMenu
                hideFooter
                columns={columns}
                rows={rows}
            />
        </BaseLayoutContent>
    );
}
