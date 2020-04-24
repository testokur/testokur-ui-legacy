import { text, boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Select from '.';
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
    new Option('Zero-th item', '0', false, false),
    new Option('First item', '1', false, false),
    new Option('Second item', '2', false, false),
    new Option('Third item', '3', false, false),
    new Option('Fourth item', '4', false, false),
  ];
  return (
    <Select
      options={options}
      onChange={action('changed')}
      placeholder={placeHolder}
      disabled={disabled}
      filled={filled}
      elemSize={size}
      spaceAfter={spaceAfter}
    />
  );
};
