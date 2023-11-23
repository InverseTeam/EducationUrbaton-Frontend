import Image from 'next/image';
import Arrows from '../../../../public/globalIcons/arrows.svg';
import './index.scss';

export const ArrowsIcon = () => {
    return (
        <>
            <Image className="icon" src={Arrows} width={24} height={24} alt="Arrows" />
        </>
    );
};
