import { IRating } from '@/shared/interface/rating';
import styles from './ui.module.scss';
import { SectionRatingElement } from '@/entities/sectionRatingElement';

export const SectionRating = ({ items }: { items?: IRating[] }) => {
    const sortedRatings = items && [...items].sort((a, b) => b.points - a.points);
    return (
        <div className={styles.layout}>
            {sortedRatings?.map((item, index) => (
                <SectionRatingElement key={index} item={item} rating={index + 1} />
            ))}
        </div>
    );
};
