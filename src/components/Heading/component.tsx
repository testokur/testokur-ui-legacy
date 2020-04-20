import * as React from 'react';
import { Testable } from '../../modules';
import { StyledHeadingProps, StyledHeading } from './styled';
import { Elements, Types } from './const';

type Props = Testable &
StyledHeadingProps & {
  element: Elements;
  children?: JSX.Element;
};

const component = (props: Props): JSX.Element => {
  const { element, type, spacingsAfter, children = <></> } = props;

  return (
    <StyledHeading as={element as never} type={type} spacingsAfter={spacingsAfter}>
      {children}
    </StyledHeading>
  );
};

component.defaultProps = {
  element: Elements.Div,
  type: Types.PageTitle,
} as Props;

export default component;
