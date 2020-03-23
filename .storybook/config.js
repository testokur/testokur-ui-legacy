import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { createTheme } from '../src/modules';

addDecorator(renderStory => <ThemeProvider theme={createTheme()}>{renderStory()}</ThemeProvider>);

addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTablesExclude: [ThemeProvider],
  })
);
addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
