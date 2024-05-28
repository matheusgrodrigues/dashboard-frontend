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
        subitems: ['tema', 'integracoes'],
    }),
];

export default menu;
