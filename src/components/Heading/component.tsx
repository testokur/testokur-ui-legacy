import * as React from 'react';
import { Testable } from '../../modules';
import { StyledHeadingProps, StyledHeading } from './styled';
import { Elements } from './const';

type Props = Testable &
StyledHeadingProps & {
  element: Elements;
};

const component = (props: Props): JSX.Element => {
  const { element, type, spacingsAfter } = props;

  return <StyledHeading as={element as never} type={type} spacingsAfter={spacingsAfter} />;
};

export default component;
