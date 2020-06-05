import styled from 'styled-components';
import React from 'react';

const StyledButtonPrimitiveContentChildren = styled.div`
  display: inline-block;
`;

type Props = {
  children: React.ReactNode;
};

const ButtonPrimitiveContentChildren = ({ children }: Props): JSX.Element => (
  <StyledButtonPrimitiveContentChildren>{children}</StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
