import * as React from 'react';
import { Testable, SpacingsAfter, Sizes } from '../../modules';
import { Label, SelectContainer, SelectPrefix, StyledCustomValue, SelectSuffix, StyledSelect } from './styled';
import { ChevronDown } from '../Icon';

type Props = Testable &
React.SelectHTMLAttributes<HTMLSelectElement> & {
  spaceAfter: SpacingsAfter;
  elemSize: Sizes;
  options: HTMLOptionElement[];
  disabled: boolean | undefined;
  filled: boolean | undefined;
  customValueText: string | undefined;
};

const component = (props: Props): JSX.Element => {
  const { spaceAfter, disabled, elemSize: size, prefix, filled, customValueText, options } = props;

  return (
    <Label spaceAfter={spaceAfter}>
      <SelectContainer>
        {prefix && (
          <SelectPrefix prefix={prefix} size={size}>
            {prefix}
          </SelectPrefix>
        )}
        {customValueText && (
          <StyledCustomValue disabled={disabled} filled={filled} size={size} prefix={prefix}>
            {customValueText}
          </StyledCustomValue>
        )}
        <StyledSelect elemSize={size} filled={filled} customValueText={customValueText} disabled={disabled}>
          {options.map(option => (
            <option key={`option-${option.value}`} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectSuffix size={size} disabled={disabled}>
          <ChevronDown />
        </SelectSuffix>
      </SelectContainer>
    </Label>
  );
};

export default component;
