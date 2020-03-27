import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { InputField } from '.';

/* eslint-disable max-len */
storiesOf('InputField', module)
  .add('Multi row ( textarea) empty', () => <InputField label="Multi row ( textarea) empty" rows={3} />)
  .add('Multi row ( textarea) disabled', () => <InputField label="Multi row ( textarea) empty" rows={3} disabled />)
  .add('Multi row ( textarea) with  initial value', () => (
    <InputField
      label="Multi row ( textarea) with initial value"
      rows={3}
      onChange={action('change')}
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida sapien id magna rutrum condimentum. Sed aliquet vel nisi et placerat. Aliquam pellentesque posuere libero, nec blandit tortor feugiat ut. Aenean lobortis erat eu arcu ullamcorper vehicula. Fusce pulvinar mauris ac justo dignissim auctor. Nullam mattis odio nec erat congue, non luctus orci scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at pulvinar purus, eu euismod sem. Maecenas suscipit arcu vitae arcu elementum aliquam."
    />
  ))
  .add('TextInput empty', () => <InputField label="Empty input" />)
  .add('TextInput disabled', () => <InputField label="Disabled input" disabled />)
  .add('TextInput with initial value', () => (
    <InputField
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida sapien id magna rutrum condimentum. Sed aliquet vel nisi et placerat. Aliquam pellentesque posuere l..."
      label="TextInput with initial value"
    />
  ));
