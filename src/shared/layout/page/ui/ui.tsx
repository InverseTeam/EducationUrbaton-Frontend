import styles from './ui.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.layout}>{children}</div>;
};
