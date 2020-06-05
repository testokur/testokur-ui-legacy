import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import { Button } from '.';
import { Sizes } from '../../modules';
import { Types } from './const';
import { Remove, PlusCircle } from '../Icons';

export const Default = (): JSX.Element => {
  const children = text('Children', 'Default button');

  return (
    <Button onClick={action('clicked')}>
      <>{children}</>
    </Button>
  );
};

export const Circled = (): JSX.Element => {
  const size = select('Size', Object.values(Sizes), Sizes.Medium);
  const type = select('Type', Object.values(Types), Types.Primary);

  return <Button onClick={action('clicked')} size={size} buttonType={type} iconLeft={<Remove />} circled title="Button" />;
};

export const WithIcon = (): JSX.Element => {
  const size = select('Size', Object.values(Sizes), Sizes.Medium);
  const type = select('Type', Object.values(Types), Types.Primary);
  const children = text('Children', 'Add');

  return (
    <Button onClick={action('clicked')} size={size} buttonType={type} iconLeft={<PlusCircle />} title="Add">
      <>{children}</>
    </Button>
  );
};

export default {
  title: 'Button',
};
