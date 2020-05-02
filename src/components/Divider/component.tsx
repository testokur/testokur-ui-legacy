import * as React from 'react';
import { Testable } from '../../modules';
import { StyledDividerProps, StyledDivider } from './styled';

type Props = Testable & StyledDividerProps;

const component = (props: Props): JSX.Element => {
  const { dataTestId, spacingsAfter } = props;

  return <StyledDivider data-testid={dataTestId} spacingsAfter={spacingsAfter} />;
};

export default component;
