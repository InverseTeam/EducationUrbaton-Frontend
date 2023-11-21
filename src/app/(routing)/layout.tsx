import { PageWrapper } from '@/shared/pageWrapper';
import { Header } from '@/widgets/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <Header />
            <main style={{ flexGrow: '1' }}>
                <PageWrapper>{children}</PageWrapper>
            </main>
        </div>
    );
}
