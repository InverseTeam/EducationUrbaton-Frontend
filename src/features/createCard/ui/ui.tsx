import styles from './ui.module.scss';
import Plus from '../../../../public/globalIcons/plus.svg';
import Image from 'next/image';
import { useState } from 'react';
import { NewGroupModal } from '@/widgets/NewGroupModal';
export const GroupCreateCard = ({ onClick, title }: { onClick?: () => void; title: string }) => {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <>
            <article onClick={() => setOpenModal(true)} className={styles.card}>
                <span className={styles.create}>
                    <Image src={Plus} width={24} height={24} alt="Plus" />
                    <h3 className={styles.blue}>{title}</h3>
                </span>
            </article>

            {openModal && <NewGroupModal setOpen={setOpenModal} />}
        </>
    );
};
