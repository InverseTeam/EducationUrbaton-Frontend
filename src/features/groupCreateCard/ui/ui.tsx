import styles from './ui.module.scss';
import Plus from '../../../../public/globalIcons/plus.svg';
import Image from 'next/image';
export const GroupCreateCard = ({ onClick }: { onClick?: () => void }) => {
    return (
        <>
            <article onClick={onClick} className={styles.card}>
                <span className={styles.create}>
                    <Image src={Plus} width={24} height={24} alt="Plus" />
                    <h3 className={styles.blue}>Добавить группу</h3>
                </span>
            </article>
        </>
    );
};
