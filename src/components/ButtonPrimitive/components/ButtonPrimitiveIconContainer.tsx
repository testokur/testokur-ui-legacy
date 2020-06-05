import React from 'react';
import styled, { css, FlattenInterpolation, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { transition, Durations, TestOkurTheme } from '../../../modules';

type StyledProps = {
  margin?: string;
  width?: string;
  height?: string;
};

const StyledButtonPrimitiveIconContainer = styled(({ className, children }): JSX.Element => <div className={className}>{children}</div>)`
  ${({ margin, width, height }: StyledProps): FlattenInterpolation<ThemedStyledProps<TestOkurTheme, DefaultTheme>> => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${margin};
    color: currentColor;
    transition: ${transition(['background', 'box-shadow'], Durations.Fast, 'ease-in-out')};
    > svg {
      width: ${width};
      height: ${height};
    }
  `}
`;

type Props = StyledProps & {
  children: React.ReactNode;
};

const ButtonPrimitiveIconContainer = ({ margin, width, height, children }: Props): JSX.Element => (
  <StyledButtonPrimitiveIconContainer margin={margin} width={width} height={height}>
    {children}
  </StyledButtonPrimitiveIconContainer>
);

export default ButtonPrimitiveIconContainer;
