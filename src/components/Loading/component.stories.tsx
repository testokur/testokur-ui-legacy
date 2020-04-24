import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Loading, LoadingTypes } from '.';

export default {
  title: 'Loading',
};

export const Default = (): JSX.Element => {
  const type = select('Type', Object.values(LoadingTypes), LoadingTypes.PageLoader);
  const loadingText = text('Text', 'Please wait, content of the page is loading...');
  const loading = boolean('Loading', true);

  return <Loading type={type} text={loadingText} loading={loading} />;
};
