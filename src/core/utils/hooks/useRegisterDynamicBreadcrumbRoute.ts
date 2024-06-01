import { useMemo } from 'react';

import { RoutesProps } from '@/config/routes';
import registerRoute from '../routes';

interface UseRegisterDynamicRouteProps {
    originalRoutes: RoutesProps[];
    slug: string[];
}

const useRegisterDynamicBreadcrumbRoute = ({ originalRoutes, slug }: UseRegisterDynamicRouteProps) => {
    const dynamicBreadcrumb = useMemo(() => {
        const { path, name } = originalRoutes[originalRoutes.length - 1];

        const generateNewRoutes = slug.map((newRoute) => ({
            ...registerRoute({
                route: name,
            }),
            displayName: newRoute,
            name: newRoute.toLowerCase(),
            path: `${path}/${newRoute}`.toLowerCase(),
        }));

        return [...originalRoutes, ...generateNewRoutes];
    }, [originalRoutes, slug]);

    return {
        breadcrumb: dynamicBreadcrumb,
    };
};

export default useRegisterDynamicBreadcrumbRoute;
