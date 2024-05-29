import { RoutesProps } from '../config/routes';
import registerMenuRoutes from '../core/utils/routes';

const menu: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
    }),
    registerMenuRoutes({
        route: 'paginas',
    }),
    registerMenuRoutes({
        category: {
            title: 'Divider',
        },
        route: 'menu',
    }),
    registerMenuRoutes({
        route: 'leads',
    }),
    registerMenuRoutes({
        route: 'midia',
    }),
    registerMenuRoutes({
        route: 'configuracoes',
        subitems: ['dashboard', 'paginas'],
    }),
];

export default menu;
