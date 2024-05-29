export default function middleware() {
    console.log('testando middleware nextjs');
}

export const config = {
    matcher: '/dashboard:path',
};
