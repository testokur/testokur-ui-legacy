import * as React from 'react';
import Icon from './styled';
import Props from './Props';
import { Sizes } from '../../modules';

const component = (props: Props): JSX.Element => {
  const { children, size, color, viewBox, ariaLabel, customColor } = props;

  return (
    <Icon size={size} color={color} viewBox={viewBox} ariaLabel={ariaLabel} customColor={customColor}>
      {children}
    </Icon>
  );
};

component.defaultProps = {
  size: Sizes.Medium,
} as Props;

component.displayName = 'Icon';

export default component;