import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;

                user = {
                    email: 'matheusgomes1203@hotmail.com',
                    password: '123456',
                };

                if (!user) {
                    throw new Error('User not found.');
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: '/',
        signOut: '/',
    },
});
