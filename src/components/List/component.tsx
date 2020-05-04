import * as React from 'react';
import { Testable } from '../../modules';
import StyledList from './styled';

type Props = Testable & {
  children: JSX.Element;
};

const component = (props: Props): JSX.Element => {
  const { dataTestId, children } = props;

  return <StyledList data-testid={dataTestId}>{children}</StyledList>;
};

export default component;
