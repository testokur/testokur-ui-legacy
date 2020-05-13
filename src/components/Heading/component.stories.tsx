import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Heading } from '.';
import { SpacingsAfter } from '../../modules';
import { Types, Elements } from './const';

export default {
  title: 'Heading',
};

export const Default = (): JSX.Element => {
  const children = text('Children', 'This Is A Page Title');
  const spaceAfter = select('SpaceAfter', Object.values(SpacingsAfter), SpacingsAfter.Small);
  const type = select('type', Object.values(Types), Types.PageTitle);
  const element = select('element', Object.values(Elements), Elements.Div);

  return (
    <Heading dataTestId="default" spacingsAfter={spaceAfter} type={type} element={element}>
      <>{children}</>
    </Heading>
  );
};
