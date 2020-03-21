import * as React from 'react';
import * as _ from 'lodash';
import { Testable } from '../../modules/testing';
import { Input, TextArea } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> &
Testable & {
  label: string;
  value?: string | string[] | number;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const component = (props: Props): JSX.Element => {
  const { rows, value } = props;

  let innerComponent;

  if (!_.isUndefined(rows) && rows > 1) {
    innerComponent = <TextArea rows={rows} value={value} />;
  } else {
    innerComponent = <Input value={value} />;
  }

  return <div>{innerComponent}</div>;
};

component.displayName = 'InputField';
