import styles from './ui.module.scss';
import Profile from '../../../../public/assets/newsprofile.svg';
import Image from 'next/image';
import { INews } from '@/shared/interface/news';
export const NewsCard = ({ item }: { item: INews }) => {
    return (
        <>
            <article className={styles.card}>
                <section className={styles.header}>
                    <Image src={Profile} width={44} height={44} alt="Иконка пользователя" />
                    <span className={styles.user}>
                        <h4 className={styles.fullname}>
                            {item.user?.surname} {item.user?.firstname[0]}. {item.user?.surdname[0]}
                            .
                        </h4>
                        <p className={styles.newsTime}>
                            {item.data} в {item.time}
                        </p>
                    </span>
                </section>
                <section className={styles.main}>
                    <p className={styles.message}>{item.message}</p>
                </section>
            </article>
        </>
    );
};
