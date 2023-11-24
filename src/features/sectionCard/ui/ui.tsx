'use client';

import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import Image from 'next/image';
import {  ISection } from '@/shared/interface/section';
import Link from 'next/link';

export const SectionCard = ({ item }: { item: ISection }) => {
    return (
        <>
            <ThemeContext.Provider value={SectionCardTheme}>
                <Link href={`/section/my/${item.id}`} className={styles.card}>
                    <section className={styles.cover}>
                        <div className={styles.buttonLayout}>
                            <button  className={styles.category}>
                                {item.category.name}
                            </button>
                        </div>
                        {/* <Image src={item.cover} width={91} height={85} alt="Card Logo" /> */}
                    </section>
                    <section className={styles.info}>
                        <h4 className={styles.title}>{item.name}</h4>
                        <div className={styles.groupRow}>
                            {item.groups &&
                                item.groups.map((group) => (
                                    <Button key={group.id} borderless use="primary" size="small">
                                        {group.name}
                                    </Button>
                                ))}
                        </div>
                    </section>
                </Link>
            </ThemeContext.Provider>
        </>
    );
};
const SectionCardTheme = ThemeFactory.create({
    btnPrimaryBg: '#6592F4',
    btnPrimaryTextColor: '#fff',
    btnBorderRadiusSmall: '8px',
    btnPrimaryHoverBg: '#6592F4',
});
