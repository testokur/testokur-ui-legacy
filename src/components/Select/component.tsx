import * as React from 'react';
import { Testable } from '../../modules';

type Props = Testable & React.SelectHTMLAttributes<HTMLSelectElement> & {};

const component = (props: Props): JSX.Element => {
  const { required } = props;

  return <div>{required}</div>;
};

export default component;
