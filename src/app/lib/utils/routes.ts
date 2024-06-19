import routes, { RoutesProps, routesName } from '../../../config/routes';

export const getRoute = (name: routesName) => routes.filter((route) => route.name === name)[0];

interface registerRouteProps extends Pick<RoutesProps, 'category'> {
    route: routesName;
    subitems?: routesName[];
}

const registerRoute = ({ route, category, subitems }: registerRouteProps) => ({
    ...getRoute(route),
    subitems: subitems?.map((item) => getRoute(item)),
    category,
});

export default registerRoute;
