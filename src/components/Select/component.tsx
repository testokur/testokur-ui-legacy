import * as React from 'react';
import { Testable, SpacingsAfter, Sizes } from '../../modules';
import { Label, SelectContainer, SelectPrefix, StyledCustomValue, SelectSuffix, StyledSelect } from './styled';
import { ChevronDown } from '../Icon';

type Props = Testable &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    spaceAfter: SpacingsAfter;
    elemSize: Sizes;
    options: HTMLOptionElement[];
    disabled?: boolean;
    filled?: boolean;
    customValueText?: string;
  };

const component = (props: Props): JSX.Element => {
  const {
    spaceAfter,
    disabled,
    elemSize: size,
    prefix,
    filled,
    customValueText,
    options,
    onChange,
    value,
    placeholder,
    dataTestId,
  } = props;

  return (
    <Label spaceAfter={spaceAfter} data-testid={dataTestId}>
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
        <StyledSelect
          elemSize={size}
          filled={filled}
          customValueText={customValueText}
          disabled={disabled}
          onChange={onChange}
          value={value}
        >
          {placeholder && (
            <option label={placeholder} value="">
              {placeholder}
            </option>
          )}
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
