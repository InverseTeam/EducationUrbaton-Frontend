import { Title } from '@/entities/pageTitle';
import styles from './ui.module.scss';
import { SectionCard } from '@/features/sectionCard';
import { Section } from '@/shared/interface/section';
import { SectionItems } from '../data';
import { Layout } from '@/shared/layout/page';
export const MySection = () => {
    return (
        <>
            <Layout>
                <Title>Мои секции</Title>
                <div className={styles.cardWrap}>
                    {SectionItems.map((item: Section) => (
                        <SectionCard key={item.id} item={item} />
                    ))}
                </div>
            </Layout>
        </>
    );
};
