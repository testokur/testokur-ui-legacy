import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Tabs from '.';

export default {
  title: 'Tabs',
};

export const Default = (): JSX.Element => {
  const value = text('value', '1');

  return (
    <Tabs
      value={value}
      name="default"
      dataTestId="default"
      onChange={action('change')}
      items={['Title-0', 'Title-1', 'Title-2', 'Title-3', 'Title-4']}
    />
  );
};
