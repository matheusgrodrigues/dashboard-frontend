import { RoutesProps } from '../config/routes';
import registerRoute from '../core/utils/routes';

const menu: RoutesProps[] = [
    registerRoute({
        route: 'paginas',
    }),
];

export default menu;
