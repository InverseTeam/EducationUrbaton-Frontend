'use client';

import styles from './ui.module.scss';
import Image from 'next/image';
import Email from '../../../../public/globalIcons/message.svg';
import Work from '../../../../public/globalIcons/work.svg';
import Avatar from '../../../../public/assets/userProfile.svg';
import Organization from '../../../../public/globalIcons/people.svg';
import { User } from '@/shared/interface/user';
//import { instanceLogged } from '@/shared/api/axios';
import { useEffect, useState } from 'react';
import { UserProfileData } from '../data';

export const UserProfile = ({ userInfo }: { userInfo?: User }) => {
    const [userData, setUserData] = useState<User | null>(null);
    /*  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instanceLogged.get('/users/auth/users/me/');
                setUserData(response.data);
            } catch (error) {
                return;
            }
        };
        fetchData();
    }, []);*/
    return (
        <>
            <header className={styles.wrap}>
                <dt className={styles.user}>
                    <Image src={Avatar} width={64} height={64} alt="UserLogo" />
                    <h1 className={styles.user__fullName}>
                        {UserProfileData?.surname} {UserProfileData?.firstname}{' '}
                        {UserProfileData?.surname}
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
                        <p className={styles.line_data}>{UserProfileData?.email}</p>
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
                        <p className={styles.line_data}>Учитель математики</p>
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
                        <p className={styles.line_data}>{UserProfileData?.school?.name}</p>
                    </dl>
                </dt>
            </header>
        </>
    );
};
