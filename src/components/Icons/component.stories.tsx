import * as React from 'react';
import { Check, Expired, ChevronDown, Email, Time, ArrowRepeat, Exclamation, Cancelled } from '.';
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

export const TimeWarning = (): JSX.Element => {
  return <Time size={Sizes.Large} color={Colors.Warning} ariaLabel="Time" />;
};

export const ArrowRepeatFailed = (): JSX.Element => {
  return <ArrowRepeat size={Sizes.Large} color={Colors.Warning} ariaLabel="Arrow Repeat" />;
};

export const ExclamationCritical = (): JSX.Element => {
  return <Exclamation size={Sizes.Large} color={Colors.Critical} ariaLabel="Exclamation" />;
};

export const ExpiredCritical = (): JSX.Element => {
  return <Expired size={Sizes.Large} color={Colors.Critical} ariaLabel="Expired" />;
};

export const CancelledCritical = (): JSX.Element => {
  return <Cancelled size={Sizes.Large} color={Colors.Critical} ariaLabel="Cancelled" />;
};
