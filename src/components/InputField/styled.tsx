import styled, { css } from 'styled-components';
import { device, convertHexToRgba } from '../../modules';

export const Label = styled.label<{ disabled?: boolean }>`
  position: absolute;
  z-index: 1500;
  top: 0.4em;
  left: 0.75em;
  padding: 0.5em;
  transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
  transform-origin: 0 0;
  background-color: ${(props): string => (props.disabled ? 'transparent' : props.theme.colors.background)};
  color: ${(props): string => (props.disabled ? props.theme.palette.inkLighter : props.theme.palette.inkLight)};
`;

const sharedStyled = css<{ disabled?: boolean }>`
  appearance: none;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${(props): string => props.theme.spacing.paddingTextareaNormal};
  border-radius: ${(props): string => props.theme.border.borderRadiusLarge};
  box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.palette.cloudNormal}`};
  background-color: ${(props): string => props.theme.palette.cloudNormal};
  color: ${(props): string => (props.disabled ? props.theme.colors.colorTextInputDisabled : props.theme.colors.colorTextInput)};
  font-size: ${(props): string => props.theme.fontSize.fontSizeInputNormal};
  line-height: ${(props): string => props.theme.lineHeight.lineHeightTextNormal};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'text')};
  font-family: ${(props): string => props.theme.fontFamily};
  transition: box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;
  z-index: 1500;

  &::placeholder {
    color: transparent;
  }

  &:hover {
    box-shadow: ${(props): string | undefined =>
    !props.disabled ? `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInputHover}` : 'inherit'};
  }

  &:focus {
    outline: none;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  &:focus + ${Label}, :not(:placeholder-shown) + ${Label} {
    z-index: 2500;
    padding: 0.5em;
    padding-top: 0.75em;
    transform: translate(0, -2em) scale(0.9);
    color: ${(props): string => props.theme.palette.primary};
    font-size: 1rem;
  }

  @media ${device.tablet} {
    background-color: ${(props): string =>
    props.disabled ? props.theme.colors.backgroundInputDisabled : props.theme.colors.backgroundInput};
    border-radius: ${(props): string => props.theme.border.borderRadiusNormal};
  }
`;

export const Input = styled.input`
  ${sharedStyled}
  flex: 1 1 20%;
  box-shadow: inset 0 0 0 ${(props): string => `${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInputHover}`};
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

export const Container = styled.div<{ hasRows: boolean }>`
  position: relative;
  min-height: 44px;
  height: ${(props): string => (props.hasRows ? 'auto' : props.theme.size.heightInputNormal)};
`;

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
