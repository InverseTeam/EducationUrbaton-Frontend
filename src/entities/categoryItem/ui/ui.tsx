import { ICategory } from '@/shared/interface/section';
import styles from './ui.module.scss';

export const CategoryItem = ({
    item,
    onSelect,
}: {
    item: ICategory | null;
    onSelect?: (value: number) => void;
}) => {
    const handleRectangleClick = (id: number) => {
        onSelect && onSelect(id);
    };
    return (
        <>
            <li
                style={{ background: item?.isSelect !== null ? '#4077F2' : undefined }}
                onClick={() => handleRectangleClick(item ? item.id : 0)}
                className={styles.category}>
                {item?.name}
            </li>
        </>
    );
};
