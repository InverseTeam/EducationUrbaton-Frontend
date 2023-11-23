import { UserProfile } from '@/features/userProfile';
import { InverseProducts } from '@/features/inverseProducts';
import { Title } from '@/entities/pageTitle';
import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';

export const Profile = () => {
    return (
        <>
            <Layout>
                <section className={styles.section}>
                    <Title> Личный кабинет</Title>
                    <UserProfile />
                </section>
                <section className={styles.section}>
                    <Title>Другие проекты Inverse</Title>
                    <InverseProducts />
                </section>
            </Layout>
        </>
    );
};
