import { text, boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Select, SelectItem } from '.';
import { Sizes, SpacingsAfter } from '../../modules';

export default {
  title: 'Select',
};

export const Default = (): JSX.Element => {
  const placeHolder = text('placeHolder', 'Please Select An Item');
  const spaceAfter = select('SpaceAfter', Object.values(SpacingsAfter), SpacingsAfter.Small);
  const size = select('Size', Object.values(Sizes), Sizes.Medium);
  const disabled = boolean('disabled', false);
  const filled = boolean('filled', false);

  const options = [
    new SelectItem('0', 'Zero-th item'),
    new SelectItem('1', 'First item'),
    new SelectItem('2', 'Second item'),
    new SelectItem('3', 'Third item'),
    new SelectItem('4', 'Fourth item'),
  ];

  return (
    <Select
      items={options}
      onChange={action('changed')}
      placeholder={placeHolder}
      disabled={disabled}
      filled={filled}
      elemSize={size}
      spaceAfter={spaceAfter}
    />
  );
};
