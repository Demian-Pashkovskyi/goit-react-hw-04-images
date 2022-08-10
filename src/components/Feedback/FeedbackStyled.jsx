import styled from '@emotion/styled';
import { block, font, flex } from '../Mixins/mixins';

export const Card = styled.img`
font-size: ${p => p.theme.fontSizes.m};
font-weight:${p => p.theme.fontWeights.bold};
font-weight:${p => p.theme.lineHeights.heading};
letter-spacing: 0.2em;
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColorBox} ${p => p.theme.radii.normal};
background-color:${p => p.theme.colors.white};
colors:${p => p.theme.colors.colorBox};
`;