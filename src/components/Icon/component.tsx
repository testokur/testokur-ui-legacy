import * as React from 'react';
import { Icon } from './styled';
import Props from './Props';

const component = (props: Props): JSX.Element => {
  const { children, size, color, viewBox, ariaLabel } = props;

  return (
    <Icon size={size} color={color} viewBox={viewBox} ariaLabel={ariaLabel}>
      {children}
    </Icon>
  );
};

component.displayName = 'Icon';

export default component;
