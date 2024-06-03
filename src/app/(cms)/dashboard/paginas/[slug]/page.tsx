import React from 'react';

import Link from 'next/link';

import { BaseLayoutContent } from '../../../../../app/components/BaseLayout';
import { getRoute } from '../../../../../core/utils/routes';

import useRegisterDynamicBreadcrumbRoute from '@/core/utils/hooks/useRegisterDynamicBreadcrumbRoute';

import breadcrumb from './breadcrumb';
import { Stack } from '@mui/material';

export const dynamicParams = false;

type PageSectionName = 'header-section';
type ComponentName = 'heading-component';
type PageName = 'home-page';
type PageType = 'page';

type SeoPageProps = {
    description: string;
    title: string;
};

type PageSection = {
    displayName: string;
    components: Component[];
    isActive: boolean;
    id: number;
    type: PageSectionName;
    name: string;
};

type Component = {
    displayName: string;
    isActive: boolean;
    name: string;
    type: ComponentName;
    id: number;
};

type Page = {
    displayName: string;
    sections: PageSection[];
    isActive: boolean;
    name: PageName;
    type: PageType;
    seo: SeoPageProps;
    id: number;
};

const fakePage: Page = {
    displayName: 'Home Page',
    isActive: true,
    name: 'home-page',
    type: 'page',
    seo: {
        description: 'Description',
        title: 'Title',
    },
    id: 1,
    sections: [
        {
            displayName: 'Header',
            components: [
                {
                    displayName: 'Titulo Principal',
                    isActive: true,
                    name: 'titulo-principal',
                    type: 'heading-component',
                    id: 1,
                },
            ],
            isActive: true,
            name: 'header',
            type: 'header-section',
            id: 1,
        },
    ],
};

export const generateStaticParams = () => [fakePage].map((page) => page);

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
            {fakePage.type === 'page' && (
                <Stack>
                    {fakePage.sections.map((section) => {
                        return (
                            <React.Fragment key={section.id}>
                                <p>{section.displayName}</p>

                                {section.components.map((component) => {
                                    return (
                                        <React.Fragment key={component.id}>
                                            <p>{component.displayName}</p>
                                        </React.Fragment>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </Stack>
            )}

            <Link href={`${getRoute('paginas').path}`}>Voltar</Link>
        </BaseLayoutContent>
    );
}
