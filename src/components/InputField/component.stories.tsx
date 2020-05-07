import { action } from '@storybook/addon-actions';
import * as React from 'react';
import styled from 'styled-components';
import { InputField } from '.';

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default {
  title: 'InputField',
};

export const TextAreaEmpty = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField onChange={action('change')} label="Multi row ( textarea) empty" rows={3} />
    </Wrapper>
  );
};

export const TextAreaDisabled = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField label="Multi row ( textarea) empty" rows={3} disabled />
    </Wrapper>
  );
};

export const TextAreaWithInitialValue = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField
        label="Multi row ( textarea) with initial value"
        rows={3}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida sapien id magna rutrum condimentum.
  Sed aliquet vel nisi et placerat.Aliquam pellentesque posuere libero, nec blandit tortor feugiat ut.
  Aenean lobortis erat eu arcu ullamcorper vehicula. Fusce pulvinar mauris ac justo dignissim auctor.
  Nullam mattis odio nec erat congue, non luctus orci scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada
  fames ac turpis egestas. Morbi at pulvinar purus, eu euismod sem. Maecenas suscipit arcu vitae arcu elementum aliquam."
      />
    </Wrapper>
  );
};

export const TextInputEmpty = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField onChange={action('change')} label="Empty input" />
    </Wrapper>
  );
};

export const TextInputDisabled = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField label="Disabled input" disabled />
    </Wrapper>
  );
};

export const TextInputWithInitialValue = (): JSX.Element => {
  return (
    <Wrapper>
      <InputField
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida sapien id magna rutrum condimentum.
    Sed aliquet vel nisi et placerat. Aliquam pellentesque posuere l..."
        label="TextInput with initial value"
      />
    </Wrapper>
  );
};

export const DateInput = (): JSX.Element => {
  return <InputField onChange={action('change')} label="Enter date time" type="date" />;
};
