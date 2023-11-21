import Image from 'next/image';
import styles from './ui.module.scss';
import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import Location from '../../../../public/globalIcons/location.svg';
import User from '../../../../public/globalIcons/user.svg';
import { Group } from '@/shared/interface/section';

export const GroupCard = ({ item }: { item: Group }) => {
    return (
        <>
            <ThemeContext.Provider value={GroupCardTheme}>
                <article className={styles.card}>
                    <section className={styles.sectionColumn}>
                        <h3 className={styles.title}>{item.name}</h3>
                        <span className={styles.row}>
                            <Image src={User} width={18} height={18} alt="Учитель" />
                            <h4 className={styles.row__text}>{item.teacher}</h4>
                        </span>
                        <span className={styles.row}>
                            <Image src={Location} width={18} height={18} alt="Местоположение" />
                            <h4 className={styles.row__text}>
                                Московская область, ул. Уездная, д. 22
                            </h4>
                        </span>
                    </section>
                    <section className={styles.sectionRow}>
                        <Button borderless use="primary" size="small">
                            {item.time}
                        </Button>
                    </section>
                </article>
            </ThemeContext.Provider>
        </>
    );
};

const GroupCardTheme = ThemeFactory.create({
    btnPrimaryBg: '#4077F2',
    btnPrimaryTextColor: '#fff',
    btnBorderRadiusSmall: '8px',
    btnPrimaryHoverBg: '#4077F2',
});
