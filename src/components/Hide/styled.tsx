import styled, { DefaultTheme, ThemeProps, FlattenInterpolation } from 'styled-components';
import React from 'react';
import { Devices } from '../../modules';
import getViewportHideStyles from './getViewportHideStyles';

export type HideProps = {
  on: Devices[];
  block?: boolean;
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const StyledHide = styled(({ on, block, ...rest }) => <span {...rest} />)<HideProps>`
  ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> => getViewportHideStyles(props.on, props.block)};
`;
