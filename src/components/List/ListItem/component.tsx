import * as React from 'react';
import StyledListItem from './styled';
import { Testable } from '../../../modules';
import { isUndefined } from '../../../utils';

type Props = Testable & {
  children?: React.ReactNode;
};

const component = (props: Props): JSX.Element => {
  const { dataTestId, children } = props;

  return <StyledListItem data-testid={dataTestId}>{isUndefined(children) ? <></> : children}</StyledListItem>;
};

export default component;
