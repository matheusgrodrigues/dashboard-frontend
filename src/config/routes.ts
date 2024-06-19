import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconTypeMap } from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import HomeIcon from '@mui/icons-material/Home';

export type routesName = 'dashboard' | 'paginas' | string;

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
        displayName: 'Login',
        name: 'login',
        path: '/',
        icon: HomeIcon,
    },
    {
        displayName: 'Dashboard',
        name: 'dashboard',
        path: '/dashboard',
        icon: HomeIcon,
    },
    {
        displayName: 'Paginas',
        name: 'paginas',
        path: '/dashboard/paginas',
        icon: FileCopyIcon,
    },
];

export default routes;
