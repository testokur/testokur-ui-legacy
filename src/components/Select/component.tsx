import * as React from 'react';
import { Testable } from '../../modules';
import { Container, Select, Suffix } from './styled';

type Props = Testable & React.SelectHTMLAttributes<HTMLSelectElement> & {};

const component = (props: Props): JSX.Element => {
  const { required } = props;

  return (
    <Container>
      <Select required={required} />
      <Suffix />
    </Container>
  );
};

export default component;
