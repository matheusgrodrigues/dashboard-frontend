import { RoutesProps } from '../config/routes';
import registerMenuRoutes from '../core/utils/routes';

const menu: RoutesProps[] = [
    registerMenuRoutes({
        route: 'paginas',
    }),
];

export default menu;
