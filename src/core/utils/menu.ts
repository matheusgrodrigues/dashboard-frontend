import { routesName, getRoute } from '@/app/config/routes';

interface registerMenuRoutesProps {
    route: routesName;
    subitems?: routesName[];
}

const registerMenuRoutes = ({ route, subitems }: registerMenuRoutesProps) => ({
    ...getRoute(route),
    subitems: subitems?.map((item) => getRoute(item)),
});

export default registerMenuRoutes;
