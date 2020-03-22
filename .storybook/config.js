import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});
addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.tsx$/), module);
