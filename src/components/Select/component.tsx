import * as React from 'react';
import { Testable, SpacingsAfter, Sizes } from '../../modules';
import { Label, SelectContainer, SelectPrefix, StyledCustomValue, SelectSuffix, StyledSelect } from './styled';
import { ChevronDown } from '../Icons';
import SelectItem from './SelectItem';

type Props = Testable &
React.SelectHTMLAttributes<HTMLSelectElement> & {
  spaceAfter: SpacingsAfter;
  elemSize: Sizes;
  items: SelectItem[];
  disabled?: boolean;
  filled?: boolean;
  customValueText?: string;
};

const component = (props: Props): JSX.Element => {
  const { spaceAfter, disabled, elemSize: size, prefix, filled, customValueText, items, onChange, value, placeholder, dataTestId } = props;

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
          {items.map(item => (
            <option key={`option-${item.Value}`} value={item.Value}>
              {item.Text}
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

component.defaultProps = {
  elemSize: Sizes.Medium,
  spaceAfter: SpacingsAfter.None,
} as Props;

export default component;
