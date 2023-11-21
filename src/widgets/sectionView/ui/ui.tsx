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
import { GroupItems } from '../data';
import { GroupCreateCard } from '@/features/createCard';
export const SectionView = ({ id }: { id: number }) => {
    const router = useRouter();
    return (
        <>
            <Layout>
                <section className={styles.header}>
                    <Title title="Вернуться на предыдущую страницу" onClick={() => router.back()}>
                        Мои секции
                    </Title>
                    <Image src={Arrow} width={28} height={28} alt="Иконка" />
                    <Title>Программирование на Python</Title>
                    <Image
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                        src={EditPen}
                        width={28}
                        height={28}
                        alt="Иконка"
                    />
                </section>
                <section className={styles.info}>
                    <button className={styles.category} type="button">
                        Технический
                    </button>
                    <Feedbacks />
                </section>
                <section className={styles.description}>
                    <p className={styles.desc}>
                        Для школьников у нас есть специальная секция по программированию, где они
                        смогут узнать все основы создания игр, приложений и веб-сайтов.
                    </p>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Группы</h2>
                    <div className={styles.groupWrap}>
                        {GroupItems.map((item) => (
                            <GroupCard key={item.id} item={item} />
                        ))}
                        <GroupCreateCard title="Добавить группу" />
                    </div>
                </section>
            </Layout>
        </>
    );
};
