import Image from 'next/image';
import styles from './ui.module.scss';
import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import Location from '../../../../public/globalIcons/location.svg';
import User from '../../../../public/globalIcons/user.svg';
import { IGroup, ISchedule } from '@/shared/interface/section';
import { RootState } from '@/shared/lib/store/store';
import { IUser } from '@/shared/interface/user';
import { useSelector } from 'react-redux';
export const GroupCard = ({ item, address }: { item: IGroup; address?: string }) => {
    const userInfo = useSelector((state: RootState): IUser => state.userReducer);
    const convertTime = (inputTime: string): string => {
        const timeParts = inputTime.split(':');
        const formattedTime = `${timeParts[0]}:${timeParts[1]}`;

        return formattedTime;
    };
    return (
        <>
            <ThemeContext.Provider value={GroupCardTheme}>
                <article className={styles.card}>
                    <section className={styles.sectionColumn}>
                        <h3 className={styles.title}>{item.name}</h3>
                        <span className={styles.row}>
                            <Image src={User} width={18} height={18} alt="Учитель" />
                            <h4 className={styles.row__text}>
                                {userInfo.lastname} {userInfo.firstname} {userInfo.surname}
                            </h4>
                        </span>
                        <span className={styles.row}>
                            <Image src={Location} width={18} height={18} alt="Местоположение" />
                            <h4 className={styles.row__text}>
                                {address || 'Местоположение не найдено'}
                            </h4>
                        </span>
                    </section>
                    <section className={styles.sectionRow}>
                        <Button borderless use="primary" size="small">
                            {item.schedules
                                ? item.schedules?.map((item: ISchedule) =>
                                      convertTime(item.start_time),
                                  )
                                : 'Не найдено'}
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
