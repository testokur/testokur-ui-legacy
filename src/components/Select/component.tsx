import * as React from 'react';
import { Testable } from '../../modules';
import { Label, Select } from './styled';

type Props = Testable & React.SelectHTMLAttributes<HTMLSelectElement> & {};

const component = (props: Props): JSX.Element => {
  const { required } = props;

  return (
    <Label>
      <Select required={required} />
    </Label>
  );
};

export default component;
