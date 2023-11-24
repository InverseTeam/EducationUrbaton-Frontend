import { IHeaderItem } from '@/shared/interface/header';
import Briefcase from '../../../../public/navicons/briefcase.svg';
import Mouthpiece from '../../../../public/navicons/mouthpiece.svg';
import Notes from '../../../../public/navicons/notes.svg';

export const SideNavBarItems: IHeaderItem[] = [
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
