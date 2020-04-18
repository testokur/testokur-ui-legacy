import React from 'react';
import { InputField, InputFieldProps } from '../InputField';
import doFormat from './doFormat';
import getMaskDetails from './getMaskDetails';
import MaskingType from './const';

type Props = Omit<InputFieldProps, 'rows'> & {
  maskingType: MaskingType;
};

const component = (props: Props): JSX.Element => {
  const { label, value, onChange, disabled, maskingType, dataTestId } = props;

  const format = (element: HTMLInputElement): void => {
    const [mask, dataFormat] = getMaskDetails(maskingType.toString());
    const [formattedValue, caretPosition] = doFormat(element.value, dataFormat, mask);
    /* eslint-disable no-param-reassign */
    element.value = formattedValue;

    if (element.selectionStart) {
      element.focus();
      element.setSelectionRange(caretPosition, caretPosition);
    }
  };

  return (
    <InputField
      data-testid={dataTestId}
      label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyUp={(e): void => format(e.currentTarget as HTMLInputElement)}
      onKeyDown={(e): void => format(e.currentTarget as HTMLInputElement)}
    />
  );
};

component.displayName = 'MaskedInputField';

export { component as MaskedInputField, MaskingType };
