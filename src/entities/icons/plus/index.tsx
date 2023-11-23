import Image from 'next/image';
import Plus from '../../../../public/globalIcons/plus.svg';
import './index.scss';

export const PlusIcon = () => {
    return (
        <>
            <Image className="icon" src={Plus} width={24} height={24} alt="Arrows" />
        </>
    );
};
