import styles from './ui.module.scss';

export const NavLogo = () => {
    return (
        <>
            <div className={styles.layout}>
                <h2 className={styles.inverse}>Inverse</h2>
                <h2 className={styles.product}>Образование</h2>
            </div>
        </>
    );
};
