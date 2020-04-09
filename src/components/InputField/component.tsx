import * as React from 'react';
import { randomId, Testable } from '../../modules';
import { Input, TextArea, Container, Label } from './styled';

type Props = Testable &
React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const component = (props: Props): JSX.Element => {
  const { label, rows, value, onChange, disabled, onKeyUp, onKeyDown } = props;
  const id = randomId('input-field');
  let innerComponent;

  if ((rows ?? 0) > 1) {
    innerComponent = <TextArea id={id} rows={rows} value={value} onChange={onChange} placeholder={label} disabled={disabled} />;
  } else {
    innerComponent = (
      <Input id={id} value={value} onChange={onChange} placeholder={label} disabled={disabled} onKeyUp={onKeyUp} onKeyDown={onKeyDown} />
    );
  }

  return (
    <Container hasRows={(rows ?? 0) > 1}>
      {innerComponent}
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
    </Container>
  );
};

component.displayName = 'InputField';

export { component, Props };
