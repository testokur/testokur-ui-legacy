import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Hide from '.';
import { Devices } from '../../modules';

export const Default = (): JSX.Element => {
  const block = boolean('block', true);
  const children = text('Children', 'This is hidden content');
  const largeDesktop = boolean('largeDesktop', false);
  const desktop = boolean('desktop', false);
  const tablet = boolean('tablet', false);
  const largeMobile = boolean('largeMobile', false);
  const mediumMobile = boolean('mediumMobile', false);
  const smallMobile = boolean('smallMobile', false);
  const on = [];

  if (largeDesktop) {
    on.push(Devices.LargeDesktop);
  }

  if (desktop) {
    on.push(Devices.Desktop);
  }

  if (tablet) {
    on.push(Devices.Tablet);
  }

  if (largeMobile) {
    on.push(Devices.LargeMobile);
  }

  if (mediumMobile) {
    on.push(Devices.MediumMobile);
  }

  if (smallMobile) {
    on.push(Devices.SmallMobile);
  }

  return (
    <Hide block={block} on={on}>
      {children}
    </Hide>
  );
};

export default {
  title: 'Hide',
};
