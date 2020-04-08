import styled from 'styled-components';
import { Sizes, getSize, convertHexToRgba, SpacingsAfter, getSpacing } from '../../modules';
import { getColorForSelect, getColorForCustomValue } from './helpers';

export const Label = styled.label<{ spaceAfter: SpacingsAfter }>`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: ${(props): string => getSpacing(props.theme)(props.spaceAfter)};
`;

export const SelectSuffix = styled.div<{ disabled?: boolean; size: Sizes }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: ${(props): string => props.theme.spacing.spaceXSmall};
  pointer-events: none;
  z-index: 3;
  height: 100%;
  color: ${(props): string => (props.disabled ? props.theme.colors.colorTextInputDisabled : props.theme.colors.colorTextInput)};

  & > * {
    width: ${(props): string => getSize(props.theme)(props.size)};
    height: ${(props): string => getSize(props.theme)(props.size)};
    margin-bottom: 2px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background: ${(props): string => props.theme.colors.backgroundInput};
`;

export const SelectPrefix = styled.div<{ size: Sizes }>`
  display: flex;
  align-items: center;
  position: absolute;
  pointer-events: none;
  z-index: 3;
  top: 0;
  padding: 12px;
  height: ${(props): string => (props.size === Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
`;

export const StyledCustomValue = styled.div<{ size: Sizes; disabled?: boolean; filled?: boolean }>`
  bottom: 0;
  font-family: ${(props): string => props.theme.fontFamily};
  pointer-events: none;
  top: 0;
  z-index: 3;
  position: absolute;
  height: 100%;
  left: ${(props): string => props.theme.spacing.spaceSmall};
  font-size: ${(props): string =>
    props.size === Sizes.Small ? props.theme.font.fontSizeInputSmall : props.theme.font.fontSizeInputNormal};
  line-height: ${(props): string => (props.size === Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
  color: ${(props): string => getColorForCustomValue(props.theme, props.disabled, props.filled)};
`;

export const StyledSelect = styled.select<{ filled?: boolean; elemSize: Sizes; customValueText?: string }>`
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  z-index: 2;
  background: ${(props): string => props.theme.colors.backgroundInput};
  border-radius: ${(props): string => props.theme.border.borderRadiusNormal};
  font-family: ${(props): string => props.theme.fontFamily};
  color: ${(props): string => getColorForSelect(props.theme, props.filled, props.customValueText)};
  font-size: ${(props): string =>
    props.elemSize === Sizes.Small ? props.theme.font.fontSizeInputSmall : props.theme.font.fontSizeInputNormal};
  height: ${(props): string => (props.elemSize === Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
  transition: box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;

  > option {
    color: ${(props): string => props.theme.colors.colorTextInput};
  }

  border: 0;
  box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInput}`};
  padding: 0px 40px 0px 12px;

  &:hover {
    box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInputHover}`};
  }

  &:focus {
    box-shadow: ${(props): string =>
    `inset 0 0 0 1px ${props.theme.border.borderColorInputFocus}, 0 0 0 3px ${convertHexToRgba(
      props.theme.border.borderColorInputFocus,
      15
    )}`};
  }

  &:disabled {
    color: ${(props): string => props.theme.colors.colorTextInputDisabled};
    cursor: not-allowed;
    background: ${(props): string => props.theme.colors.backgroundInputDisabled};

    &:hover {
      box-shadow: inset 0 0 0 1px ${(props): string => props.theme.border.borderColorInput};
    }
  }

  ${(props): string | undefined => {
    if (props.customValueText !== undefined) {
      return `&:-webkit-autofill,
      &:-internal-autofill-selected {
        -webkit-text-fill-color: transparent;
      }`;
    }
    return undefined;
  }};
`;
