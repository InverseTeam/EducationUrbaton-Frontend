'use client';

import { Title } from '@/entities/pageTitle';
import styles from './ui.module.scss';
import { useRouter } from 'next/navigation';
import { Layout } from '@/shared/layout/page';
import Image from 'next/image';
import Arrow from '../../../../public/globalIcons/arrow.svg';
import EditPen from '../../../../public/globalIcons/editPen.svg';
import { Feedbacks } from '@/features/feedbacks';
import { RatingItems } from '../data';
import { GroupCreateCard } from '@/features/createCard';
import { SectionRating } from '@/features/sectionRating';
import { ISection } from '@/shared/interface/section';
import { useEffect, useState } from 'react';
import { GetSectionByID } from '../model';
import { GroupCard } from '@/features/groupCard';

export const SectionView = ({ id }: { id: number }) => {
    const router = useRouter();
    const [sectionData, setSectionData] = useState<ISection | null>(null);
    useEffect(() => {
        const GetSection = async () => {
            const fetchSection: ISection = await GetSectionByID({ id });
            setSectionData(fetchSection);
        };
        GetSection();
    }, []);
   
    return (
        <>
            <Layout>
                <section className={styles.header}>
                    <Title title="Вернуться на предыдущую страницу" onClick={() => router.back()}>
                        Мои секции
                    </Title>
                    <Image src={Arrow} width={28} height={28} alt="Иконка" />
                    <Title>{sectionData?.name}</Title>
                    <Image
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                        onClick={() => router.push(`/section/my/${id}/change`)}
                        src={EditPen}
                        width={28}
                        height={28}
                        alt="Иконка"
                    />
                </section>
                <section className={styles.info}>
                    <button className={styles.category} type="button">
                        {sectionData?.category.name}
                    </button>
                    <Feedbacks />
                </section>
                <section className={styles.description}>
                    <p className={styles.desc}>{sectionData?.description}</p>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Группы</h2>
                    <div className={styles.groupWrap}>
                        {sectionData?.groups.map((item) => (
                            <GroupCard address={sectionData.address} key={item.id} item={item} />
                        ))}
                        <GroupCreateCard onClick={() => {}} title="Добавить группу" />
                    </div>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Рейтинг</h2>
                    <SectionRating items={RatingItems} />
                </section>
            </Layout>
        </>
    );
};
