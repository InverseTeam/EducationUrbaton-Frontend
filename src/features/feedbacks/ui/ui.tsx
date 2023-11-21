'use client';

import styles from './ui.module.scss';
import Star from '../../../../public/globalIcons/star.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState(0);
    const [averValue, setAverValue] = useState(0);
    useEffect(() => {
        const randomFeedbacks = Math.floor(Math.random() * 200) + 1;
        const randomFloat = Math.random() * 4 + 1;
        const roundedNumber = Math.round(randomFloat * 10) / 10;
        setAverValue(roundedNumber);
        setFeedbacks(randomFeedbacks);
    }, []);
    return (
        <>
            <div className={styles.layout}>
                <Image src={Star} width={18} height={18} alt="Звезда" />
                <span className={styles.blue}>{averValue}</span>
                <span className={styles.blue}>|</span>
                <span className={styles.black}>{feedbacks} отзывов</span>
            </div>
        </>
    );
};
