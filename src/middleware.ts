import { NextResponse } from 'next/server';

import { auth } from './auth';

import { getRoute } from './core/utils/routes';

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL(getRoute('login').path, req.url));
    } else if (req.auth && req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(getRoute('paginas').path, req.url));
    }
});
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
