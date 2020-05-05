import React, { ChangeEventHandler } from 'react';
import { Testable } from '../../modules';
import { StyledTabContainer } from './styled';
import Tab from './Tab';

type Props = Testable & {
  items: string[];
  name: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const component = (props: Props): JSX.Element => {
  const { items, dataTestId, name, onChange, value } = props;

  return (
    <StyledTabContainer data-testid={dataTestId}>
      {items.map((item: string, index: number) => (
        <Tab name={name} title={item} value={index} onChange={onChange} defaultChecked={index.toString() === value.toString()} />
      ))}
    </StyledTabContainer>
  );
};

export default component;
