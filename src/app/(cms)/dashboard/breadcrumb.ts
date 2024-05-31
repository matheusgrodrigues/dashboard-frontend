import { RoutesProps } from '../../../config/routes';
import registerMenuRoutes from '../../../core/utils/routes';

const breadcrumb: RoutesProps[] = [
    registerMenuRoutes({
        route: 'dashboard',
    }),
];

export default breadcrumb;
