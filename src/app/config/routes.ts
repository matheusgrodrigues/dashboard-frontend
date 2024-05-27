import React from 'react';

import { BuildingLibraryIcon, WrenchIcon } from '@heroicons/react/16/solid';

export type routesName = 'dashboard' | 'configuracoes';

export interface RoutesProps {
    displayName: string;
    name: routesName;
    path: string;
    icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined;
            titleId?: string | undefined;
        } & React.RefAttributes<SVGSVGElement>
    >;
}

const routes: RoutesProps[] = [
    {
        displayName: 'Dashboard',
        name: 'dashboard',
        path: '/dashboard',
        icon: BuildingLibraryIcon,
    },
    {
        displayName: 'Configurações',
        name: 'configuracoes',
        path: '/configuracoes',
        icon: WrenchIcon,
    },
];

export const getRoute = (name: routesName) => routes.filter((route) => route.name === name)[0];

export default routes;
