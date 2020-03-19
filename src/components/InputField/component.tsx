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

export const component = (props: Props) => {
  let innerComponent;

  if (!_.isUndefined(props.rows) && props.rows > 1) {
    innerComponent = <TextArea rows={props.rows} value={props.value} />;
  } else {
    innerComponent = <Input value={props.value} />;
  }

  return <div>{innerComponent}</div>;
};

component.displayName = 'InputField';
