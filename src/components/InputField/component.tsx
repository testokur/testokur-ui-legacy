import * as React from 'react';
import { Testable } from '../../modules/testing';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> &
  Testable & {
    label: string;
    value?: unknown;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  };

export const component = (props: Props) => {
  return <div>{props.label}</div>;
};

component.displayName = 'InputField';
