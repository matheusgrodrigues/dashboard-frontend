import { BaseLayoutContent } from '../../../../../app/components/BaseLayout';
import registerMenuRoutes, { getRoute } from '../../../../../core/utils/routes';

import breadcrumb from './breadcrumb';
import Link from 'next/link';

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
    // TODO: Criar uma função para ajustar o breadcrumb neste cenário em que precisa adicionar uma nova rota a lista atual.
    // Abaixo um modelo de teste mais ou menos para basear, melhorar este código.
    // registerMenuRoutes -> registerBreadcrumbRoutes

    const bread = breadcrumb;

    let newRoute = registerMenuRoutes({
        route: 'paginas',
    });

    newRoute.displayName = params.slug;
    newRoute.path = `${getRoute('paginas').path}/${params.slug}`;

    !bread.includes(newRoute) && bread.push(newRoute);

    return (
        <BaseLayoutContent headerTitle={params.slug} breadcrumb={bread}>
            {params.slug}

            <Link href={`${getRoute('paginas').path}`}>Voltar</Link>
        </BaseLayoutContent>
    );
}
