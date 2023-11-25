'use client';

import { Title } from '@/entities/pageTitle';
import styles from './ui.module.scss';
import { useRouter } from 'next/navigation';
import { Layout } from '@/shared/layout/page';
import Image from 'next/image';
import Arrow from '../../../../public/globalIcons/arrow.svg';
import EditPen from '../../../../public/globalIcons/editPen.svg';
import { Feedbacks } from '@/features/feedbacks';
import { GroupCard } from '@/features/groupCard';
import { GroupItems, RatingItems } from '../data';
import { GroupCreateCard } from '@/features/createCard';
import { SectionRating } from '@/features/sectionRating';
import { useGetSectionQuery } from '@/features/section/api';

export const SectionView = ({ id }: { id: number }) => {
    const router = useRouter();

    const { data: SectionData, isLoading } = useGetSectionQuery(id);

    if (isLoading) {
        return <>Loading...</>;
    }

    console.log(SectionData);

    if (SectionData !== undefined) {
        return (
            <>
                <Layout>
                    <section className={styles.header}>
                        <Title
                            title="Вернуться на предыдущую страницу"
                            onClick={() => router.back()}>
                            Мои секции
                        </Title>
                        <Image src={Arrow} width={28} height={28} alt="Иконка" />
                        <Title>{SectionData.name}</Title>
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
                            {SectionData.category.name}
                        </button>
                        <Feedbacks />
                    </section>
                    <section className={styles.description}>
                        <p className={styles.desc}>
                            {SectionData.description}
                        </p>
                    </section>
                    <section className={styles.groups}>
                        <h2 className={styles.title}>Группы</h2>
                        <div className={styles.groupWrap}>
                            {SectionData.groups.map((item) => (
                                <GroupCard key={item.id} item={item} />
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
    }
};
