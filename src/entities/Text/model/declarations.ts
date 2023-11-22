import { ReactNode } from 'react';
import { TEXT_TYPES } from './constants';

type TTextType = (typeof TEXT_TYPES)[number];

export interface ITextProps {
    children: ReactNode;
    type: TTextType;
    size: number;
    weight?: number | string;
    color?: string;
}

export interface ITextStyle {
    size: number;
    weight?: number | string;
    color?: string;
}
