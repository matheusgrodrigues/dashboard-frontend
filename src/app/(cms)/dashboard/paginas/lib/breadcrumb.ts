import { RoutesProps } from '../../../../../config/routes';
import registerRoute from '../../../../lib/utils/routes';

const breadcrumb: RoutesProps[] = [
    registerRoute({
        route: 'dashboard',
    }),
    registerRoute({
        route: 'paginas',
    }),
];

export default breadcrumb;
