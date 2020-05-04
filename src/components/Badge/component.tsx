import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Testable } from '../../modules';
import { StyledBadge, StyledBadgeContent, IconContainer } from './styled';
import { Types, Tokens } from './const';
import getColor from './getColor';

type Props = Testable & {
  type: Types;
  children?: React.ReactNode;
  icon?: JSX.Element;
  ariaLabel?: string;
};

const component = (props: Props): JSX.Element => {
  const { dataTestId, children = <></>, icon, ariaLabel, type } = props;
  const theme = useContext(ThemeContext);
  const backgroundColor = getColor(theme, Tokens.Background, type.toString());
  const foregroundColor = getColor(theme, Tokens.Color, type.toString());
  const borderColor = getColor(theme, Tokens.Border, type.toString());

  return (
    <StyledBadge
      data-testid={dataTestId}
      aria-label={ariaLabel}
      background={backgroundColor}
      borderColor={borderColor}
      foregroundColor={foregroundColor}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};

component.displayName = 'Badge';
export default component;
