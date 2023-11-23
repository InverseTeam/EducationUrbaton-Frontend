import People from '../../../../public/ourProducts/kadri.svg';
import Project from '../../../../public/ourProducts/project.svg';
import Afisha from '../../../../public/ourProducts/afisha.svg';
import Docs from '../../../../public/ourProducts/docs.svg';

export interface InverseProductCardTypes {
    id: number;
    title: string;
    icon: string;
    description: string;
}

export const InverseProductCardData: InverseProductCardTypes[] = [
    {
        id: 0,
        title: 'Inverse.Кадры',
        icon: People,
        description: 'Сервис для вовлечения сотрудников во внутрикорпоративные активности',
    },
    {
        id: 1,
        title: 'Inverse.Project',
        icon: Project,
        description: 'Сервис для организации проектной деятельности в учебном заведении',
    },
    {
        id: 2,
        title: 'Inverse.Афиша',
        icon: Afisha,
        description: 'Сервис для формирование туристических пакетов',
    },
    {
        id: 3,
        title: 'Inverse.Документы',
        icon: Docs,
        description: 'Сервис для автоматизации согласования документов внутри компании ',
    },
];
