import { ReactNode } from 'react';
import styles from './ui.module.scss';
export function PageWrapper({ children }: { children: ReactNode }) {
    return <div className={styles.pageWrapper}>{children}</div>;
}
