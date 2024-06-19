import { NextResponse } from 'next/server';

import { auth } from './auth';

export default auth((req) => {
    const routes = {
        paginas: '/dashboard/paginas',
        login: '/',
    };

    if (!req.auth && req.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL(routes.login, req.url));
    } else if (req.auth && req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(routes.paginas, req.url));
    }
});
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
