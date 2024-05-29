import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const locale = 'pt-BR';

    const baseLayoutMessage = (await import(`./config/messages/components/baseLayout/${locale}.json`)).default;
    const dashboardMessage = (await import(`./config/messages/pages/dashboard/${locale}.json`)).default;
    const paginasMessage = (await import(`./config/messages/pages/dashboard/paginas/${locale}.json`)).default;
    const loginMessage = (await import(`./config/messages/pages/login/${locale}.json`)).default;

    return {
        locale,
        messages: { ...baseLayoutMessage, ...dashboardMessage, ...paginasMessage, ...loginMessage },
    };
});
