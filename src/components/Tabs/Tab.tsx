import React from 'react';
import { Testable } from '../../modules';
import { StyledTab, StyledInput, StyledSpan } from './styled';

type Props = Testable & React.InputHTMLAttributes<HTMLInputElement>;

const tab = (props: Props): JSX.Element => {
  const { dataTestId, title, name, value, onChange, checked } = props;

  return (
    <StyledTab data-testid={dataTestId}>
      <StyledInput type="radio" name={name} value={value} onChange={onChange} checked={checked} />
      <StyledSpan>{title}</StyledSpan>
    </StyledTab>
  );
};

export default tab;
