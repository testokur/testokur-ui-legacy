import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('Button', module).add(
  'Default',
  () => {
    const children = text('Children', 'Default button');

    return (
      <Button onClick={action('clicked')}>
        <>{children}</>
      </Button>
    );
  },
  {
    info: 'This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
  }
);
