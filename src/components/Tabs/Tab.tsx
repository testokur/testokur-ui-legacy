import React from 'react';
import { Testable } from '../../modules';
import { StyledTab, StyledInput, StyledSpan } from './styled';

type Props = Testable & React.InputHTMLAttributes<HTMLInputElement> & {};

const component = (props: Props): JSX.Element => {
  const { dataTestId, title, name, value, onChange } = props;

  return (
    <StyledTab data-testid={dataTestId}>
      <StyledInput type="radio" name={name} value={value} onChange={onChange} />
      <StyledSpan>{title}</StyledSpan>
    </StyledTab>
  );
};

export default component;