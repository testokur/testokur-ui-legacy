import styled, { DefaultTheme, ThemeProps, FlattenInterpolation } from 'styled-components';
import { Devices } from '../../modules';
import getViewportHideStyles from './getViewportHideStyles';

export type HideProps = {
  on: Devices[];
  block?: boolean;
};

export const StyledHide = styled.span<HideProps>`
  ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> => getViewportHideStyles(props.on, props.block)};
`;
