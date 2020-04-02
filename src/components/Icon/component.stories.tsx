import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ChevronDown } from '.';
import Check from './Check';
import { Colors, Sizes } from '../../modules';

storiesOf('Icons', module)
  .add('ChevronDown large success', () => <ChevronDown size={Sizes.Large} color={Colors.Success} ariaLabel="ChevronDown" />)
  .add('Check primary medium', () => <Check color={Colors.Primary} ariaLabel="Check" />);
