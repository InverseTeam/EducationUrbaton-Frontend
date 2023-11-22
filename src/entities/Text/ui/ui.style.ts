import { css, styled } from 'styled-components';
import { ITextStyle } from '../model/declarations';

const TEXT_STYLES = css<ITextStyle>`
    font-style: normal;
    color: ${({ color }) => color};
    font-size: ${({ size }) => size}px;
    font-weight: ${({ weight }) => weight};
`;

export const StyledTextH1 = styled.h1<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextH2 = styled.h2<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextH3 = styled.h3<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextH4 = styled.h4<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextH5 = styled.h5<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextH6 = styled.h6<ITextStyle>`
    ${TEXT_STYLES}
`;

export const StyledTextP = styled.p<ITextStyle>`
    ${TEXT_STYLES}
`;
export const StyledTextSpan = styled.span<ITextStyle>`
    ${TEXT_STYLES}
`;
