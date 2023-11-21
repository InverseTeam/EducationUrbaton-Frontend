'use client';

import styles from './ui.module.scss';
import Link from 'next/link';
import { SideNavBarItems, UnderSideNavBarItems } from '../data';
import { NavItem } from '@/entities/header/navItem';
import { NavLogo } from '@/entities/header/navLogo';

export const Header = () => {
    return (
        <header className={styles.header__layout}>
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
                    {UnderSideNavBarItems.map((item, idx) => {
                        return <NavItem key={idx} item={item} />;
                    })}
                </div>
            </section>
        </header>
    );
};
