import React, { useCallback } from 'react';
import { Label, Input, TextContainer, LabelText, Info, IconContainer } from './styled';
import { Testable } from '../../modules';
import { Check } from '../Icons';

type Props = Testable &
  React.InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    value?: string;
    info?: string;
  };

const component = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { checked, disabled, onChange, dataTestId, value, name, tabIndex, readOnly, info, label } = props;
  const preventOnClick = useCallback(ev => {
    ev.preventDefault();
  }, []);

  /* TODO: Add ToolTip when it is ready */
  return (
    <Label checked={checked} disabled={disabled} data-testid={dataTestId}>
      <Input
        checked={checked}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        onChange={onChange}
        readOnly={readOnly}
        ref={ref}
      />
      <IconContainer checked={checked} onClick={readOnly ? preventOnClick : undefined}>
        <Check customColor="white" />
      </IconContainer>
      {(label || info) && (
        <TextContainer>
          {label && <LabelText>{label}</LabelText>}
          {info && <Info>{info}</Info>}
        </TextContainer>
      )}
    </Label>
  );
});

export default component;
