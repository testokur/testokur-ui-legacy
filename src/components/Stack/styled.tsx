import styled from 'styled-components';
import React from 'react';

const StyledStack = styled(({ className, element: Element, children, dataTestId }) => (
  <Element className={className} data-testid={dataTestId}>
    {children}
  </Element>
))``;

export default StyledStack;
