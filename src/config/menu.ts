import { RoutesProps } from '../config/routes';

import registerRoute from '../app/lib/utils/routes';

const menu: RoutesProps[] = [
    registerRoute({
        route: 'paginas',
    }),
];

export default menu;
