import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { InputField } from '.';

storiesOf('InputField', module)
  .add('multi row', () => (
    <InputField
      label="Multirow Input Field"
      rows={3}
      onChange={action('change')}
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac cursus sapien,"
    />
  ))
  .add('Empty textarea', () => <InputField label="Multirow empty input field" rows={3} />);
