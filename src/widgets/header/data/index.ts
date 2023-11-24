import { SideNavItem } from '@/shared/interface/headers';
import Briefcase from '../../../../public/navicons/briefcase.svg';
import Mouthpiece from '../../../../public/navicons/mouthpiece.svg';
import Notes from '../../../../public/navicons/notes.svg';
import Settings from '../../../../public/navicons/settings.svg';
import Profile from '../../../../public/navicons/profile.svg';

export const SideNavBarItems: SideNavItem[] = [
    {
        title: 'Секции',
        path: '/section',
        icon: Briefcase,
        submenu: true,
        subMenuItems: [
            { title: 'Новая секция', path: '/section/create' },
            { title: 'Мои секции', path: '/section/my' },
        ],
    },
    {
        title: 'Новости',
        path: '/news',
        icon: Mouthpiece,
        submenu: false,
    },
    {
        title: 'Заявки',
        path: '/flows',
        icon: Notes,
        submenu: false,
    },
];

export const UnderSideNavBarItems: SideNavItem[] = [
    {
        title: 'Профиль',
        path: '/profile',
        icon: Profile,
        submenu: false,
    },
];
