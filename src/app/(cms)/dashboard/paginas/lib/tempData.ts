type PageSectionType = 'header-section';
type ComponentType = 'heading-component' | 'paragraph-component';
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
    type: PageSectionType;
    name: string;
};

type Component = {
    displayName: string;
    isActive: boolean;
    value: string;
    name: string;
    type: ComponentType;
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

export const fakePage: Page = {
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
                    value: 'Este é o exemplo do valor populado no banco de dados para este componente.',
                    name: 'titulo-principal',
                    type: 'heading-component',
                    id: 1,
                },
                {
                    displayName: 'Legenda',
                    isActive: true,
                    value: 'Este é o exemplo do valor populado no banco de dados para este componente.',
                    name: 'legenda-principal',
                    type: 'paragraph-component',
                    id: 2,
                },
            ],

            isActive: true,
            name: 'header',
            type: 'header-section',
            id: 1,
        },

        {
            displayName: 'Header',
            components: [
                {
                    displayName: 'Titulo Principal',
                    isActive: true,
                    value: 'Este é o exemplo do valor populado no banco de dados para este componente.',
                    name: 'titulo-principal',
                    type: 'heading-component',
                    id: 1,
                },
                {
                    displayName: 'Legenda',
                    isActive: true,
                    value: 'Este é o exemplo do valor populado no banco de dados para este componente.',
                    name: 'legenda-principal',
                    type: 'paragraph-component',
                    id: 2,
                },
            ],

            isActive: true,
            name: 'header',
            type: 'header-section',
            id: 2,
        },
    ],
};
