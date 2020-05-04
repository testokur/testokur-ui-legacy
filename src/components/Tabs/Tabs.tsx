import React from 'react';
import { Testable } from '../../modules';
import { StyledTabs } from './styled';

type Props = Testable & {
  children: React.ReactNode;
};

const component = (props: Props): JSX.Element => {
  const { children, dataTestId } = props;

  return <StyledTabs data-testid={dataTestId}>{children}</StyledTabs>;
};
export default component;
