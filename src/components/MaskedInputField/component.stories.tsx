import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { MaskedInputField, MaskingType } from '.';

storiesOf('MaskedInputField', module)
  .add('With Phone Mask', () => <MaskedInputField maskingType={MaskingType.Phone} onChange={action('change')} label="Enter Phone Number" />)
  .add('With DateTime Mask', () => (
    <MaskedInputField maskingType={MaskingType.DateTime} onChange={action('change')} label="Enter Date Time" />
  ));
