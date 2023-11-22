import { Providers } from '@/shared/lib/store/provider/provider';
import './globals.scss';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
    title: 'Inverse Образование',
    description: 'Админ-панели для управления учебным процессом',
};

const LabGrotesque = localFont({
    src: [
        {
            path: '../../public/fonts/LabGrotesque-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={LabGrotesque.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
