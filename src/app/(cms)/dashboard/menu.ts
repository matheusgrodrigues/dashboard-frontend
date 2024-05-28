import { RoutesProps } from '@/app/config/routes';
import registerMenuRoutes from '@/core/utils/routes';

const menu: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
    }),
    registerMenuRoutes({
        route: 'configuracoes',
        subitems: ['configurar-tema'],
    }),
];

export default menu;
