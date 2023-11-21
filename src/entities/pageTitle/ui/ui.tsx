import styles from './ui.module.scss';

export const Title = ({
    children,
    title,
    onClick,
}: {
    children: React.ReactNode;
    title?: string;
    onClick?: () => void;
}) => {
    return (
        <>
            <h1
                onClick={onClick}
                style={{ cursor: onClick ? 'pointer' : 'default' }}
                title={title}
                className={styles.title}>
                {children}
            </h1>
        </>
    );
};
