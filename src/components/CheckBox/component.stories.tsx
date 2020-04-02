import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from '@storybook/addons';
import { CheckBox } from '.';

storiesOf('CheckBox', module)
  .add('Default', () => {
    const [checked, setChecked] = useState(false);
    const label = text('Label', 'Label');
    const disabled = boolean('disabled', false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      action('changed')();
      setChecked(e.target.checked);
    };

    return <CheckBox label={label} disabled={disabled} checked={checked} onChange={onChange} />;
  })
  .add('With help', () => {
    const [checked, setChecked] = useState(false);
    const label = text('Label', 'Label');
    const info = text('Info', 'Additional information to this choice');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      action('changed')();
      setChecked(e.target.checked);
    };

    return <CheckBox label={label} info={info} checked={checked} onChange={onChange} />;
  });
