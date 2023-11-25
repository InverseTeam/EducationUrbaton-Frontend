import styles from './ui.module.scss';
import Profile from '../../../../public/assets/newsprofile.svg';
import Image from 'next/image';
import { INews } from '@/shared/interface/news';
import { FormatData } from '@/shared/utils/formatData';
export const NewsCard = ({ item }: { item: INews }) => {
    const newData = item.timedate && FormatData(item.timedate);
    return (
        <>
            <article className={styles.card}>
                <section className={styles.header}>
                    <Image src={Profile} width={44} height={44} alt="Иконка пользователя" />
                    <span className={styles.author}>
                        <h4 className={styles.fullname}>
                            {item.author?.surname} {item.author?.firstname[0]}.{' '}
                            {item.author?.surname[0]}.
                        </h4>
                        <p className={styles.newsTime}>{newData}</p>
                    </span>
                </section>
                <section className={styles.main}>
                    <p className={styles.message}>{item.content}</p>
                </section>
            </article>
        </>
    );
};
