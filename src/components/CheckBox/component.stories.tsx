import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import * as React from 'react';
import { CheckBox } from '.';
import { useState } from '@storybook/addons';

storiesOf('CheckBox', module)
  .add('Default', () => {
    const [checked, setChecked] = useState(false);
    const label = text('Label', 'Label');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      action('changed')();
      setChecked(e.target.checked);
    };

    return <CheckBox label={label} checked={checked} onChange={onChange} />;
  })
  .add('With help', () => {
    const [checked, setChecked] = useState(false);
    const label = text('Label', 'Label');
    const info = text('Info', 'Additional information to this choice');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      action('changed')();
      setChecked(e.target.checked);
    };

    return <CheckBox label={label} info={info} checked={checked} onChange={onChange} />;
  });
