import { RoutesProps } from '../../../../config/routes';
import registerRoute from '../../../lib/utils/routes';

const breadcrumb: RoutesProps[] = [
    registerRoute({
        route: 'dashboard',
    }),
];

export default breadcrumb;
