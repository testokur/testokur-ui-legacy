import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Sizes, Colors } from './styled';
import { ChevronDown } from '.';

storiesOf('Icons', module).add('Chevrondown default', () => (
  <ChevronDown size={Sizes.Large} color={Colors.Success} ariaLabel="Chevrondown default" />
));
