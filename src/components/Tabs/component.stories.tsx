import React from 'react';
import { Tabs, Tab } from '.';

export default {
  title: 'Tabs',
};

export const Default = (): JSX.Element => {
  return (
    <Tabs dataTestId="default">
      <Tab title="Title-1" />
      <Tab title="Title-2" />
      <Tab title="Title-3" />
      <Tab title="Title-4" />
    </Tabs>
  );
};
