import { RoutesProps } from '@/app/config/routes';
import registerMenuRoutes from '@/core/utils/routes';

const breadcrumbRoutes: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
    }),
    registerMenuRoutes({
        route: 'configuracoes',
    }),
];

export default breadcrumbRoutes;
