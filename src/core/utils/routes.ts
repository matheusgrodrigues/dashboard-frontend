import routes, { routesName } from '../../config/routes';

export const getRoute = (name: routesName) => routes.filter((route) => route.name === name)[0];

interface RegisterMenuRoutesProps {
    route: routesName;
    subitems?: routesName[];
}

const registerMenuRoutes = ({ route, subitems }: RegisterMenuRoutesProps) => ({
    ...getRoute(route),
    subitems: subitems?.map((item) => getRoute(item)),
});

export default registerMenuRoutes;
