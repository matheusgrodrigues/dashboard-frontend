import { useMemo } from 'react';

import { RoutesProps } from '@/config/routes';
import registerRoute, { getRoute } from '../routes';

interface UseRegisterDynamicRouteProps {
    originalRoutes: RoutesProps[];
    rootSlug: string;
    slug: string;
}

const useRegisterDynamicBreadcrumbRoute = ({ originalRoutes, rootSlug, slug }: UseRegisterDynamicRouteProps) => {
    const dynamicBreadcrumb = useMemo(
        () => [
            ...originalRoutes,
            {
                ...registerRoute({
                    route: rootSlug,
                }),
                displayName: slug,
                name: slug.toLowerCase(),
                path: `${getRoute(rootSlug).path}/${slug}`.toLowerCase(),
            },
        ],
        [originalRoutes, rootSlug, slug]
    );

    return {
        breadcrumb: dynamicBreadcrumb,
    };
};

export default useRegisterDynamicBreadcrumbRoute;
