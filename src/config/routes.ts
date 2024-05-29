import React from 'react';

import {
    BuildingLibraryIcon,
    BuildingStorefrontIcon,
    WrenchScrewdriverIcon,
    DocumentIcon,
    EnvelopeIcon,
    PhotoIcon,
    CubeIcon,
    CommandLineIcon,
} from '@heroicons/react/16/solid';

export type routesName =
    | 'configurar-tema'
    | 'configuracoes'
    | 'integracoes'
    | 'dashboard'
    | 'paginas'
    | 'midia'
    | 'leads'
    | 'menu'
    | 'tema';

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
        icon: BuildingLibraryIcon,
    },
    {
        displayName: 'Configurações',
        name: 'configuracoes',
        path: '/configuracoes',
        icon: WrenchScrewdriverIcon,
    },
    {
        displayName: 'Configurar Tema',
        name: 'configurar-tema',
        path: '/configurar-tema',
        icon: BuildingStorefrontIcon,
    },
    {
        displayName: 'Paginas',
        name: 'paginas',
        path: '/paginas',
        icon: DocumentIcon,
    },
    {
        displayName: 'Leads',
        name: 'leads',
        path: '/leads',
        icon: EnvelopeIcon,
    },
    {
        displayName: 'Menu',
        name: 'menu',
        path: '/menu',
        icon: CubeIcon,
    },
    {
        displayName: 'Mídia',
        name: 'midia',
        path: '/midia',
        icon: PhotoIcon,
    },
    {
        displayName: 'Tema',
        name: 'tema',
        path: '/tema',
        icon: PhotoIcon,
    },
    {
        displayName: 'Integrações',
        name: 'integracoes',
        path: '/integracoes',
        icon: CommandLineIcon,
    },
];

export default routes;
