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
        submenu: true,
        subMenuItems: [
            { title: 'Все новости', path: '/settings/account' },
            { title: 'Мои новости', path: '/settings/privacy' },
        ],
    },
    {
        title: 'Заявки',
        path: '/flows',
        icon: Notes,
        submenu: true,
        subMenuItems: [
            { title: 'Все заявки', path: '/settings/account' },
            { title: 'Мои заявки', path: '/settings/privacy' },
        ],
    },
];

export const UnderSideNavBarItems: SideNavItem[] = [
    {
        title: 'Настройки',
        path: '/settings',
        icon: Settings,
        submenu: false,
    },
    {
        title: 'Профиль',
        path: '/settings',
        icon: Profile,
        submenu: false,
    },
];
