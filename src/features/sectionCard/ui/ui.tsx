'use client';

import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import Image from 'next/image';
import Asset from '../../../../public/python.svg';
import { Section } from '@/shared/interface/sectionCard';
export const SectionCard = ({ item }: { item: Section }) => {
    return (
        <>
            <ThemeContext.Provider value={SectionCardTheme}>
                <article className={styles.card}>
                    <section className={styles.cover}>
                        <div className={styles.buttonLayout}>
                            <button className={styles.category}>Технические</button>
                        </div>
                        <Image src={Asset} width={91} height={85} alt="Card Logo" />
                    </section>
                    <section className={styles.info}>
                        <h4 className={styles.title}>Программирование на Python</h4>
                        <div>
                            <Button borderless use="primary" size="small">
                                ИК-144
                            </Button>
                        </div>
                    </section>
                </article>
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
