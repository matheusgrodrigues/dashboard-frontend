import { RoutesProps } from '../../../../config/routes';
import registerRoute from '../../../../core/utils/routes';

const breadcrumb: RoutesProps[] = [
    registerRoute({
        route: 'dashboard',
    }),
];

export default breadcrumb;
