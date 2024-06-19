import React from 'react';

import Link from 'next/link';

import { BaseLayoutContent } from '../../components/BaseLayout';
import { getRoute } from '../../../../lib/utils/routes';

import useRegisterDynamicBreadcrumbRoute from '../../lib/hooks/useRegisterDynamicBreadcrumbRoute';

import breadcrumb from './lib/breadcrumb';
import { Stack, Typography } from '@mui/material';

import { fakePage } from '../lib/tempData';

export const dynamicParams = false;

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
                    <Typography variant="h5">Seções: {fakePage.sections.length}</Typography>

                    {fakePage.sections.map((section) => {
                        return (
                            <React.Fragment key={section.id}>
                                <ul>
                                    <li>
                                        <p className="font-bold">
                                            Seção: {section.displayName}
                                            <p className="font-normal">Components: {section.components.length}</p>
                                        </p>
                                    </li>
                                </ul>

                                {section.components.map((component) => {
                                    return (
                                        <React.Fragment key={component.id}>
                                            <ul>
                                                <li>
                                                    <p className="font-bold">
                                                        Component: {component.displayName}
                                                        <p className="font-normal">Value: {component.value}</p>
                                                    </p>
                                                </li>
                                            </ul>
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
