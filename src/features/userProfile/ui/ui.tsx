'use client';

import styles from './ui.module.scss';
import Image from 'next/image';
import Email from '../../../../public/globalIcons/message.svg';
import Work from '../../../../public/globalIcons/work.svg';
import Avatar from '../../../../public/assets/userProfile.svg';
import Organization from '../../../../public/globalIcons/people.svg';
import { IUser, User } from '@/shared/interface/user';
import { useEffect, useState } from 'react';
import { GetUserData } from '../model';

export const UserProfile = ({ userInfo }: { userInfo?: User }) => {
    const [userData, setUserData] = useState<IUser | null>(null);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser = await GetUserData();
            setUserData(fetchUser);
        };
        GetUser();
    }, []);
    return (
        <>
            <header className={styles.wrap}>
                <dt className={styles.user}>
                    <Image src={Avatar} width={64} height={64} alt="UserLogo" />
                    <h1 className={styles.user__fullName}>
                        {userData?.lastname} {userData?.firstname} {userData?.surname}
                    </h1>
                </dt>
                <dt className={styles.user__info}>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Email}
                                width={24}
                                height={24}
                                alt="Email"
                            />
                            <p className={styles.line_title}>Почта:</p>
                        </dd>
                        <p className={styles.line_data}>{userData?.email}</p>
                    </dl>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Work}
                                width={24}
                                height={24}
                                alt="Email"
                            />
                            <p className={styles.line_title}>Должность:</p>
                        </dd>
                        <p className={styles.line_data}>
                            {userData?.role.role_name || 'Не определена'}
                        </p>
                    </dl>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Organization}
                                width={24}
                                height={24}
                                alt="Organization"
                            />
                            <p className={styles.line_title}>Организация:</p>
                        </dd>
                        <p className={styles.line_data}>
                            {userData?.school.name || 'Не определена'}
                        </p>
                    </dl>
                </dt>
            </header>
        </>
    );
};
