import React from 'react';
import { HideProps, StyledHide } from './styled';
import { Testable } from '../../modules';

type Props = Testable &
HideProps & {
  children?: React.ReactNode;
};

const component = (props: Props): JSX.Element => {
  const { dataTestId, children = <></>, on, block } = props;

  return (
    <StyledHide on={on} block={block} data-testid={dataTestId}>
      {children}
    </StyledHide>
  );
};

component.defaultProps = {
  block: true,
} as Props;

component.displayName = 'Hide';
export default component;
