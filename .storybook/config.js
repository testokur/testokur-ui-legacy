import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

import { createTheme, GlobalStyle } from '../src/modules';

addDecorator(renderStory => (
  <ThemeProvider theme={createTheme()}>
    <GlobalStyle />
    {renderStory()}
  </ThemeProvider>
));

addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTablesExclude: [ThemeProvider],
  })
);
addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
