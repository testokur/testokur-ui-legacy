import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { InputField } from '.';

storiesOf('InputField', module).add('multi row', () => (
  <InputField
    label={'Multirow Input Field'}
    rows={3}
    value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac cursus sapien,'}
  />
));
