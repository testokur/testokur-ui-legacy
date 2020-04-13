import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module).add(
  'Default',
  () => {
    return <Button onClick={action('clicked')} />;
  },
  {
    info: 'This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
  }
);
