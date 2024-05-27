import { RoutesProps } from '@/app/config/routes';
import registerMenuRoutes from '@/core/utils/menu';

const menuRoutes: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
        subitems: ['configuracoes'],
    }),
    registerMenuRoutes({
        route: 'configuracoes',
    }),
];

export default menuRoutes;
