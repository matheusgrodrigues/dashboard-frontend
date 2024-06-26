'use client';

import { useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import EditIcon from '@mui/icons-material/Edit';

import { SessionProviderContext } from '../../../components/providers/SessionProvider';
import { getRoute } from '../../../lib/utils/routes';

import { BaseLayoutContent } from '../components/BaseLayout';

import breadcrumb from './lib/breadcrumb';
import { fakePage } from './lib/tempData';

export default function Paginas() {
    const router = useRouter();

    const t = useTranslations('paginas');

    const { session } = useContext(SessionProviderContext);

    console.log('Paginas', session);

    const columns: GridColDef[] = useMemo(
        () => [
            {
                headerClassName: 'bg-slate-200',
                headerName: 'Nome da Página',
                field: 'col1',
                width: 150,
            },
            {
                headerClassName: 'bg-slate-200',
                headerName: 'Status',
                renderCell: ({ row }) => {
                    return (
                        <Box>
                            {row.isActive ? (
                                <Chip variant="outlined" label="Online" color="success" />
                            ) : (
                                <Chip variant="outlined" label="Offline" color="error" />
                            )}

                            {row.isActive && (
                                <IconButton onClick={() => router.push(`${getRoute('paginas').path}/${row.name}`)}>
                                    <EditIcon />
                                </IconButton>
                            )}
                        </Box>
                    );
                },
                field: 'col3',
                width: 150,
            },
        ],
        [router]
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
                rows={[fakePage].map(({ isActive, name, id, ...page }) => ({
                    isActive,
                    col1: page.displayName,
                    name,
                    id,
                }))}
            />
        </BaseLayoutContent>
    );
}
