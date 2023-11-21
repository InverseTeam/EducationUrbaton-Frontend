import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { SideNavItem } from '@/shared/interface/headers';
import Image from 'next/image';
import Arrow from '../../../../../public/navicons/arrow.svg';
import styles from './ui.module.scss';

export const NavItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <nav>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={` ${styles.element} ${
                            pathname?.includes(item.path) ? styles.element__active : ''
                        }`}>
                        <div className={styles.element__icon}>
                            {item.icon ? (
                                <Image src={item.icon} width={22} height={22} alt="Иконка" />
                            ) : null}
                            <span className={styles.element__title}>{item.title}</span>
                        </div>
                        {item.subMenuItems ? (
                            <div className={`${subMenuOpen ? styles.element__arrow : ''} flex`}>
                                <Image src={Arrow} width={16} height={16} alt="Иконка" />
                            </div>
                        ) : null}
                    </button>

                    {subMenuOpen && (
                        <ul className={styles.element__item__list}>
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${
                                            subItem.path === pathname
                                                ? styles.item__active
                                                : styles.item
                                        }`}>
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </ul>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`${
                        item.path === pathname ? styles.item__default__active : styles.item__default
                    }`}>
                    {item.icon ? (
                        <Image src={item.icon} width={22} height={22} alt="Иконка" />
                    ) : null}
                    <span className={styles.item__default__element__title}>{item.title}</span>
                </Link>
            )}
        </nav>
    );
};