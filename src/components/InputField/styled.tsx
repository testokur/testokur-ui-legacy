import styled, { css } from 'styled-components';

const sharedStyled = css<{ disabled?: boolean }>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${(props): string => props.theme.spacing.paddingTextareaNormal};
  border-radius: ${(props): string => props.theme.border.borderRadiusLarge};
  box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.palette.cloudNormal}`};
  background-color: ${(props): string => props.theme.palette.cloudNormal};
  color: ${(props): string => (props.disabled ? props.theme.colorTextInputDisabled : props.theme.colorTextInput)};
  font-size: ${(props): string => props.theme.fontSize.fontSizeInputNormal};
  line-height: ${(props): string => props.theme.lineHeight.lineHeightTextNormal};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'text')};
  font-family: ${(props): string => props.theme.fontFamily};
  transition: box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;

  &::placeholder {
    color: ${(props): string => (props.disabled ? props.theme.palette.inkLighter : props.theme.palette.inkLight)};
  }

  &:hover {
    box-shadow: ${(props): string | undefined =>
      !props.disabled
        ? `inset 0 0 0 ${props.theme.border.borderWidthInput}
    ${props.theme.border.borderColorInputHover}`
        : undefined};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props): string => `inset 0 0 0 1px ${props.theme.colors.borderColorInputFocus}`};
  }
`;

export const Input = styled.input`
  ${sharedStyled}
`;

export const Label = styled.label``;

export const Container = styled.div``;

export const TextArea = styled.textarea<{ fullHeight?: boolean; disabled?: boolean }>`
  ${sharedStyled}

  height: ${({ fullHeight }): string | undefined => (fullHeight ? '100%' : undefined)};
  min-height: 44px;
  flex: ${({ fullHeight }): string | undefined => (fullHeight ? '1' : undefined)};
  resize: none;
`;
