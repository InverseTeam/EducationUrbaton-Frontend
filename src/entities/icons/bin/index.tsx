import Image from 'next/image';
import Bin from '../../../../public/globalIcons/bin.svg';
import './index.scss';

export const BinIcon = () => {
    return (
        <>
            <Image className="icon" src={Bin} width={24} height={24} alt="Arrows" />
        </>
    );
};
