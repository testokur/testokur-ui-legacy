import styled from 'styled-components';
import React from 'react';
import { curry } from '../../modules';
import { Theme } from '../../modules/theme';

export enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum Colors {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Critical = 'Critical',
}

type StringMappingLambda = (value: string) => string;

const getSize = (theme: Theme): StringMappingLambda =>
  curry<string>({
    Small: () => theme.size.widthIconSmall,
    Medium: () => theme.size.widthIconMedium,
    Large: () => theme.size.widthIconLarge,
  });

const getColor = (theme: Theme): StringMappingLambda =>
  curry<string>({
    Primary: () => theme.colors.colorIconPrimary,
    Critical: () => theme.colors.colorIconCritical,
    Info: () => theme.colors.colorIconInfo,
    Secondary: () => theme.colors.colorIconSecondary,
    Success: () => theme.colors.colorIconSuccess,
    Warning: () => theme.colors.colorIconWarning,
  });

const IconWithoutAtrrs = styled.svg<{ size: Sizes; color: Colors }>`
  width: ${(props): string => getSize(props.theme)(props.size)};
  height: ${(props): string => getSize(props.theme)(props.size)};
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
  color: ${(props): string => getColor(props.theme)(props.color)};
`;

export const Icon = styled(({ viewBox, children, ariaHidden, ariaLabel, size, color }) => (
  <IconWithoutAtrrs
    size={size}
    color={color}
    viewBox={viewBox}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? 'true' : undefined}
    aria-label={ariaLabel}
  >
    {children}
  </IconWithoutAtrrs>
))``;
