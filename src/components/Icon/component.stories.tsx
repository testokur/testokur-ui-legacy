import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Sizes, Colors } from './styled';
import { ChevronDown } from '.';

storiesOf('Icons', module).add('ChevronDown large success', () => (
  <ChevronDown size={Sizes.Large} color={Colors.Success} ariaLabel="ChevronDown" />
));
