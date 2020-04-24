import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from '@storybook/addons';
import CheckBox from '.';

export default {
  title: 'Checkbox',
};

export const Default = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const label = text('Label', 'Label');
  const disabled = boolean('disabled', false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    action('changed')();
    setChecked(e.target.checked);
  };

  return <CheckBox dataTestId="default" label={label} disabled={disabled} checked={checked} onChange={onChange} />;
};

export const WithHelp = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const label = text('Label', 'Label');
  const info = text('Info', 'Additional information to this choice');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    action('changed')();
    setChecked(e.target.checked);
  };

  return <CheckBox dataTestId="default-with-help" label={label} info={info} checked={checked} onChange={onChange} />;
};
