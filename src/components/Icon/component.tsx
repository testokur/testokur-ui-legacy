import * as React from 'react';
import { Icon, Sizes } from './styled';
import Props from './Props';

const component = (props: Props): JSX.Element => {
  const { children, size, color, viewBox, ariaLabel } = props;

  return (
    <Icon size={size} color={color} viewBox={viewBox} ariaLabel={ariaLabel}>
      {children}
    </Icon>
  );
};

component.defaultProps = {
  size: Sizes.Medium,
} as Props;

component.displayName = 'Icon';

export default component;
