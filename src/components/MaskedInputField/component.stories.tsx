import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { MaskedInputField, MaskingType } from '.';

export default {
  title: 'MaskedInputField',
};

export const WithPhoneMask = (): JSX.Element => {
  return <MaskedInputField maskingType={MaskingType.Phone} onChange={action('change')} label="Enter Phone Number" />;
};

export const WtihDateTimeMask = (): JSX.Element => {
  return <MaskedInputField maskingType={MaskingType.DateTime} onChange={action('change')} label="Enter Date Time" />;
};
