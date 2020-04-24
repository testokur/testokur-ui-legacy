import * as React from 'react';
import { ChevronDown } from '.';
import Check from './Check';
import { Colors, Sizes } from '../../modules';

export default {
  title: 'Icon',
};

export const ChevronDownLargeSuccess = (): JSX.Element => {
  return <ChevronDown size={Sizes.Large} color={Colors.Success} ariaLabel="ChevronDown" />;
};

export const CheckPrimaryMedium = (): JSX.Element => {
  return <Check color={Colors.Primary} ariaLabel="Check" />;
};
