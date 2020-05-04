import React, { ChangeEventHandler } from 'react';
import { Testable } from '../../modules';
import { StyledTabContainer } from './styled';
import Tab from './Tab';

type Props = Testable & {
  items: string[];
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const component = (props: Props): JSX.Element => {
  const { items, dataTestId, name, onChange } = props;

  return (
    <StyledTabContainer data-testid={dataTestId}>
      {items.map((item: string, index: number) => (
        <Tab name={name} title={item} value={index} onChange={onChange} />
      ))}
    </StyledTabContainer>
  );
};

export default component;
