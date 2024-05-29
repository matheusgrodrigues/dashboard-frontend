import routes, { RoutesProps, routesName } from '../../config/routes';

export const getRoute = (name: routesName) => routes.filter((route) => route.name === name)[0];

interface RegisterMenuRoutesProps extends Pick<RoutesProps, 'category'> {
    route: routesName;
    subitems?: routesName[];
}

const registerMenuRoutes = ({ route, category, subitems }: RegisterMenuRoutesProps) => ({
    ...getRoute(route),
    subitems: subitems?.map((item) => getRoute(item)),
    category,
});

export default registerMenuRoutes;
