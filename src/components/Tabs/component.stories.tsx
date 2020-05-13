import React, { ChangeEvent } from 'react';
import { useState } from '@storybook/addons';
import Tabs from '.';

export default {
  title: 'Tabs',
};

export const Default = (): JSX.Element => {
  const [tabIndex, setTabIndex] = useState(0);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTabIndex(Number.parseInt(event.currentTarget.value, 10));
  };

  return <Tabs value={tabIndex} dataTestId="default" onChange={onChange} items={['Title-0', 'Title-1', 'Title-2', 'Title-3', 'Title-4']} />;
};
