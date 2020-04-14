import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import Button from '.';
import { Sizes } from '../../modules';
import { Types } from './const';
import { Remove, PlusCircle } from '../Icon';

storiesOf('Button', module)
  .add('Default', () => {
    const children = text('Children', 'Default button');

    return (
      <Button onClick={action('clicked')}>
        <>{children}</>
      </Button>
    );
  })
  .add('Circled', () => {
    const size = select('Size', Object.values(Sizes), Sizes.Medium);
    const type = select('Type', Object.values(Types), Types.Primary);

    return <Button onClick={action('clicked')} size={size} buttonType={type} iconLeft={<Remove />} circled title="Button" />;
  })
  .add('Button with icon', () => {
    const size = select('Size', Object.values(Sizes), Sizes.Medium);
    const type = select('Type', Object.values(Types), Types.Primary);
    const children = text('Children', 'Add');

    return (
      <Button onClick={action('clicked')} size={size} buttonType={type} iconLeft={<PlusCircle />} title="Add">
        <>{children}</>
      </Button>
    );
  });
