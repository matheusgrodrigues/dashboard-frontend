import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconTypeMap } from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import PagesIcon from '@mui/icons-material/Pages';

export type routesName = 'dashboard' | 'paginas';

export interface RoutesProps {
    displayName: string;
    name: routesName;
    path: string;
    icon: OverridableComponent<IconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
    category?: {
        title: string;
    };
    subitems?: RoutesProps[];
}

const routes: RoutesProps[] = [
    {
        displayName: 'Dashboard',
        name: 'dashboard',
        path: '/dashboard',
        icon: FileCopyIcon,
    },
    {
        displayName: 'Paginas',
        name: 'paginas',
        path: '/dashboard/paginas',
        icon: PagesIcon,
    },
];

export default routes;
