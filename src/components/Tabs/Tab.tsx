import React from 'react';
import { Testable } from '../../modules';
import { StyledTab } from './styled';

type Props = Testable & {
  title: string;
};

const component = (props: Props): JSX.Element => {
  const { dataTestId, title } = props;

  return <StyledTab data-testid={dataTestId}>{title}</StyledTab>;
};
export default component;
