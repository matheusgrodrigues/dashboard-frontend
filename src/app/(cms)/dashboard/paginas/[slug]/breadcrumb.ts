import { RoutesProps } from '../../../../../config/routes';
import registerMenuRoutes from '../../../../../core/utils/routes';

const breadcrumb: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
    }),
    registerMenuRoutes({
        route: 'paginas',
    }),
];

export default breadcrumb;
