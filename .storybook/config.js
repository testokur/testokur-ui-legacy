import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';

import { createTheme, GlobalStyle } from '../src/modules';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

addDecorator(renderStory => (
  <ThemeProvider theme={createTheme()}>
    <GlobalStyle />
    {renderStory()}
  </ThemeProvider>
));

addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
