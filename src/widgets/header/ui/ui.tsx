'use client';

import styles from './ui.module.scss';

import { SideNavBarItems } from '../data';
import { NavItem } from '@/entities/header/navItem';
import { NavLogo } from '@/entities/header/navLogo';
import { CSSProperties, useEffect, useState } from 'react';
import { IUser } from '@/shared/interface/user';
import { GetUserData } from '../model';
import { IHeaderItem } from '@/shared/interface/header';
import Profile from '../../../../public/navicons/profile.svg';
export const Header = ({ style }: { style?: CSSProperties }) => {
    const [profileData, setProfileData] = useState<IHeaderItem>({
        title: 'Профиль',
        path: '/profile',
        icon: Profile,
        submenu: false,
    });
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser = await GetUserData();
            const UserName: string = fetchUser.firstname + ' ' + fetchUser.lastname;
            setProfileData((prevProfileData: IHeaderItem | null) => ({
                ...prevProfileData,
                title: UserName || 'Профиль',
                path: prevProfileData?.path || '/profile',
            }));
        };
        GetUser();
    }, []);
    return (
        <header style={style} className={styles.header__layout}>
            <section className={styles.header__logo}>
                <NavLogo />
            </section>
            <section className={styles.header__items}>
                <div className={styles.items}>
                    {SideNavBarItems.map((item, idx) => {
                        return <NavItem key={idx} item={item} />;
                    })}
                </div>
                <div className={styles.items}>
                    <NavItem item={profileData} />
                </div>
            </section>
        </header>
    );
};
