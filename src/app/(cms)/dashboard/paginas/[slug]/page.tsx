import Link from 'next/link';

import { BaseLayoutContent } from '../../../../../app/components/BaseLayout';
import { getRoute } from '../../../../../core/utils/routes';

import useRegisterDynamicBreadcrumbRoute from '@/core/utils/hooks/useRegisterDynamicBreadcrumbRoute';

import breadcrumb from './breadcrumb';

export const dynamicParams = false;

export const generateStaticParams = () => {
    const mockPages = [
        {
            id: '1',
            nome: 'Home',
            atividade: '31 de maio de 2024',
            status: 'Online',
        },
    ];

    return mockPages.map((page) => page);
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    const dynamicBreadcrumb = useRegisterDynamicBreadcrumbRoute({
        originalRoutes: breadcrumb,
        slug: [params.slug],
    });

    return (
        <BaseLayoutContent headerTitle={params.slug} breadcrumb={dynamicBreadcrumb.breadcrumb}>
            {params.slug}

            <Link href={`${getRoute('paginas').path}`}>Voltar</Link>
        </BaseLayoutContent>
    );
}
