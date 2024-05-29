import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Paginas',
};

interface PaginasLayoutProps {
    children: React.ReactNode;
}

export default function PaginasLayout({ children }: PaginasLayoutProps) {
    return <>{children}</>;
}
