import { AuthForm } from '@/features/authForm';
import styles from './ui.module.scss';

export const Auth = () => {
    return (
        <>
            <div className={styles.layout}>
                <AuthForm />

                <p className={styles.text}>
                    Выбирайте свое образование вместе с{' '}
                    <span style={{ color: '#4077F2' }}>Inverse</span>
                </p>
            </div>
        </>
    );
};
