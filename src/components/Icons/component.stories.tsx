import * as React from 'react';
import { ChevronDown, Email, Pending, ArrowRepeat, Exclamation } from '.';
import Check from './Check';
import { Colors, Sizes } from '../../modules';

export default {
  title: 'Icon',
};

export const ChevronDownLargeSuccess = (): JSX.Element => {
  return <ChevronDown size={Sizes.Large} color={Colors.Success} ariaLabel="ChevronDown" />;
};

export const CheckSuccessful = (): JSX.Element => {
  return <Check size={Sizes.Large} color={Colors.Success} ariaLabel="Check" />;
};

export const EmailPrimary = (): JSX.Element => {
  return <Email size={Sizes.Large} color={Colors.Info} ariaLabel="Email" />;
};

export const PendingWarning = (): JSX.Element => {
  return <Pending size={Sizes.Large} color={Colors.Warning} ariaLabel="Pending" />;
};

export const ArrowRepeatFailed = (): JSX.Element => {
  return <ArrowRepeat size={Sizes.Large} color={Colors.Warning} ariaLabel="Arrow Repeat" />;
};

export const ExclamationCritical = (): JSX.Element => {
  return <Exclamation size={Sizes.Large} color={Colors.Critical} ariaLabel="Exclamation" />;
};
