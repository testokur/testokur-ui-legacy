import * as _ from 'lodash';
import styled from 'styled-components';
import React from 'react';
import { Sizes, getSize, Colors, getColor } from '../../modules';

const IconWithoutAtrrs = styled.svg<{ size: Sizes; color: Colors; customColor?: string }>`
  width: ${(props): string => getSize(props.theme)(props.size)};
  height: ${(props): string => getSize(props.theme)(props.size)};
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
  color: ${(props): string => (_.isUndefined(props.customColor) ? getColor(props.theme)(props.color) : props.customColor)};
`;

const Icon = styled(({ viewBox, children, ariaHidden, ariaLabel, size, color, customColor }) => (
  <IconWithoutAtrrs
    size={size}
    color={color}
    viewBox={viewBox}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? 'true' : undefined}
    aria-label={ariaLabel}
    customColor={customColor}
  >
    {children}
  </IconWithoutAtrrs>
))``;

export default Icon;
