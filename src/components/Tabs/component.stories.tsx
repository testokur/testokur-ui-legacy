import React from 'react';
import { Tabs } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tabs',
};

export const Default = (): JSX.Element => {
  return (
    <Tabs name="default" dataTestId="default" onChange={action('change')} items={['Title-1', 'Title-2', 'Title-3', 'Title-4', 'Title-5']} />
  );
};
