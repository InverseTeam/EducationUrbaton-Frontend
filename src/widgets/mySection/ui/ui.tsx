import { Title } from '@/entities/pageTitle';
import styles from './ui.module.scss';
import { SectionCard } from '@/features/sectionCard';
import { Section } from '@/shared/interface/sectionCard';
import { SectionItems } from '../data';
export const MySection = () => {
    return (
        <>
            <div className={styles.layout}>
                <Title>Мои заявки</Title>

                <div className={styles.cardWrap}>
                    {SectionItems.map((item: Section) => (
                        <SectionCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};
