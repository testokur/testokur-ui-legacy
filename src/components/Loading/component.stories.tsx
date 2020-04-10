import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Loading, LoadingTypes } from '.';

storiesOf('Loading', module).add('Playground', () => {
  const type = select('Type', Object.values(LoadingTypes), LoadingTypes.PageLoader);
  const loadingText = text('Text', 'Please wait, content of the page is loading...');
  const loading = boolean('Loading', true);

  return <Loading type={type} text={loadingText} loading={loading} />;
});
