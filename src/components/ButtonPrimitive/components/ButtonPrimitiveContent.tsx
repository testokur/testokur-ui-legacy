import styled from 'styled-components';
import React from 'react';

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledButtonPrimitiveContent = styled(({ theme, loading, ...props }): JSX.Element => <div {...props} />)<Props>`
  visibility: ${(props): string => (props.loading ? 'hidden' : '')};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  align-items: center;
`;

const ButtonPrimitiveContent = ({ children, loading }: Props): JSX.Element => (
  <StyledButtonPrimitiveContent loading={loading}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
