import React from 'react';
import { select } from '@storybook/addon-knobs';
import { SpacingsAfter } from '../../modules';
import Divider from '.';

export default {
  title: 'Divider',
};

export const Default = (): JSX.Element => {
  const spaceAfter = select('SpaceAfter', Object.values(SpacingsAfter), SpacingsAfter.Small);

  return <Divider dataTestId="default" spacingsAfter={spaceAfter} />;
};
