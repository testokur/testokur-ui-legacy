import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import Select from '.';
import { Sizes, SpacingsAfter } from '../../modules';

storiesOf('Select', module).add('Default', () => {
  const customValueText = text('customTextValue', 'customTextValue');
  const spaceAfter = select('SpaceAfter', Object.values(SpacingsAfter), SpacingsAfter.Small);
  const size = select('Size', Object.values(Sizes), Sizes.Medium);
  const disabled = boolean('disabled', false);
  const filled = boolean('filled', false);
  const options = [
    new Option('Zero-th item', '0', false, false),
    new Option('Zero-th item', '0', false, false),
    new Option('First item', '1', false, false),
    new Option('Second item', '2', false, false),
    new Option('Third item', '3', false, false),
    new Option('Fourth item', '4', false, false),
  ];

  return (
    <Select
      options={options}
      customValueText={customValueText}
      disabled={disabled}
      filled={filled}
      elemSize={size}
      spaceAfter={spaceAfter}
    />
  );
});
