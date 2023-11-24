import { IRating } from '@/shared/interface/rating';
import styles from './ui.module.scss';
import Flash from '../../../../public/globalIcons/flash.svg';
import Image from 'next/image';
export const SectionRatingElement = ({ item, rating }: { item?: IRating; rating: number }) => {
    return (
        <div className={styles.layout}>
            <span className={styles.title}>
                <div className={styles.position}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none">
                        <path
                            d="M14.0923 2.07788C15.6707 0.407067 18.3293 0.407066 19.9077 2.07788L25.7441 8.25592L31.9221 14.0923C33.5929 15.6707 33.5929 18.3293 31.9221 19.9077L25.7441 25.7441L19.9077 31.9221C18.3293 33.5929 15.6707 33.5929 14.0923 31.9221L8.25592 25.7441L2.07788 19.9077C0.407067 18.3293 0.407066 15.6707 2.07788 14.0923L8.25592 8.25592L14.0923 2.07788Z"
                            fill="#4077F2"
                        />
                        <text
                            x="50%"
                            y="55%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="15"
                            fill="white">
                            {rating}
                        </text>
                    </svg>
                </div>
                <h3 className={styles.userName}>
                    {item?.user?.firstname[0]}. {item?.user.surdname[0]}. {item?.user.surname}
                </h3>
            </span>
            <p className={styles.group}>ИК-144</p>
            <div className={styles.points}>
                <h4 className={styles.text}>{item?.points}</h4>
                <Image src={Flash} width={22} height={22} alt="Молния" />
            </div>
        </div>
    );
};
