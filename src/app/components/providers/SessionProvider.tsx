'use client';

import { createContext } from 'react';

import { Session } from 'next-auth';

interface SessionProviderContextProps {
    session: Session | null;
}

export const SessionProviderContext = createContext({} as SessionProviderContextProps);

interface SessionProviderProps {
    children: React.ReactNode;
    session: Session | null;
}

const SessionProvider: React.FC<SessionProviderProps> = ({ children, session }) => (
    <SessionProviderContext.Provider value={{ session }}>{children}</SessionProviderContext.Provider>
);

export default SessionProvider;
