import React from 'react';

import { BuildingLibraryIcon, WrenchIcon } from '@heroicons/react/16/solid';

export type routesName = 'dashboard' | 'configuracoes' | 'configurar-tema';

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
    subitems?: RoutesProps[];
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
    {
        displayName: 'Configurar Tema',
        name: 'configurar-tema',
        path: '/configurar-tema',
        icon: WrenchIcon,
    },
];

export default routes;
