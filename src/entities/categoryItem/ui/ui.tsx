import { Category } from '@/shared/interface/section';
import styles from './ui.module.scss';

export const CategoryItem = ({
    item,
    onSelect,
}: {
    item: Category;
    onSelect: (value: number) => void;
}) => {
    const handleRectangleClick = (id: number) => {
        onSelect(id);
    };
    return (
        <>
            <li
                style={{ background: item.isSelect ? '#4077F2' : undefined }}
                onClick={() => handleRectangleClick(item.id)}
                className={styles.category}>
                {item.name}
            </li>
        </>
    );
};
