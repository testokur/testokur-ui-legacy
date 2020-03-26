import styled, { css } from 'styled-components';
import { device, convertHexToRgba } from '../../modules';

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
    !props.disabled ? `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInputHover}` : 'inherit'};
  }

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    border-radius: ${(props): string => props.theme.border.borderRadiusNormal};
    background-color: ${(props): string =>
    props.disabled ? props.theme.colors.backgroundInputDisabled : props.theme.colors.backgroundInput};
  }
`;

export const Input = styled.input`
  ${sharedStyled}
  flex: 1 1 20%;
  border: none;
  padding: ${(props): string => props.theme.spacing.paddingInputNormal};
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  background-color: transparent;
  height: 100%;
  z-index: 2;
  min-width: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label``;

export const Container = styled.div``;

export const TextArea = styled.textarea<{ fullHeight?: boolean; disabled?: boolean }>`
  ${sharedStyled}

  height: ${({ fullHeight }): string | undefined => (fullHeight ? '100%' : undefined)};
  min-height: 44px;
  flex: ${({ fullHeight }): string | undefined => (fullHeight ? '1' : undefined)};
  resize: none;

  &:focus {
    box-shadow: ${(props): string =>
    `inset 0 0 0 1px ${props.theme.border.borderColorInputFocus}, 0 0 0 3px  ${convertHexToRgba(
      props.theme.border.borderColorInputFocus,
      15
    )}`};
  }
`;
