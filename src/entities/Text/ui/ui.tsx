import { FC } from 'react';
import { ITextProps } from '../model/declarations';
import {
    H1_TEXT,
    H2_TEXT,
    H3_TEXT,
    H4_TEXT,
    H5_TEXT,
    H6_TEXT,
    P_TEXT,
    SPAN_TEXT,
} from '../model/constants';
import {
    StyledTextH1,
    StyledTextH2,
    StyledTextH3,
    StyledTextH4,
    StyledTextH5,
    StyledTextH6,
    StyledTextP,
    StyledTextSpan,
} from './ui.style';

export const Text: FC<ITextProps> = ({ children, type, size, weight = '500', color = '#222' }) => {
    switch (type) {
        case H1_TEXT:
            return (
                <StyledTextH1 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH1>
            );
        case H2_TEXT:
            return (
                <StyledTextH2 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH2>
            );
        case H3_TEXT:
            return (
                <StyledTextH3 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH3>
            );
        case H4_TEXT:
            return (
                <StyledTextH4 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH4>
            );
        case H5_TEXT:
            return (
                <StyledTextH5 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH5>
            );
        case H6_TEXT:
            return (
                <StyledTextH6 size={size} weight={weight} color={color}>
                    {children}
                </StyledTextH6>
            );
        case P_TEXT:
            return (
                <StyledTextP size={size} weight={weight} color={color}>
                    {children}
                </StyledTextP>
            );
        case SPAN_TEXT:
            return (
                <StyledTextSpan size={size} weight={weight} color={color}>
                    {children}
                </StyledTextSpan>
            );
    }
    return <></>;
};
