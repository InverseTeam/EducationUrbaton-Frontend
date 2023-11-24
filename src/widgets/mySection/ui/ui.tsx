'use client';

import { Title } from '@/entities/pageTitle';
import styles from './ui.module.scss';
import { SectionCard } from '@/features/sectionCard';
import { ISection, Section } from '@/shared/interface/section';
import { Layout } from '@/shared/layout/page';
import { useGetAllSectionsQuery } from '@/features/section/api';
export const MySection = () => {
    const { data: SectionItems, isLoading } = useGetAllSectionsQuery();

    return (
        <>
            <Layout>
                <Title>Мои секции</Title>
                <div className={styles.cardWrap}>
                    {SectionItems &&
                        SectionItems.map((item: ISection) => (
                            <SectionCard key={item.id} item={item} />
                        ))}
                </div>
            </Layout>
        </>
    );
};
