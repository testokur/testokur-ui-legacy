import styled from 'styled-components';
import * as _ from 'lodash';
import { Sizes, getSize } from '../../modules/common';

export const Label = styled.label<{ size: Sizes }>`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: ${(props): string => (props.size == Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
`;

export const Suffix = styled.div<{ disabled: boolean; size: Sizes }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
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
  height: ${(props): string => (props.size == Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
`;

export const StyledCustomValue = styled.div<{ size: Sizes; disabled?: boolean; filled?: boolean }>`
  bottom: 0;
  font-family: ${(props): string => props.theme.fontFamily};
  pointer-events: none;
  top: 0;
  z-index: 3;
  position: absolute;
  height: 100%;
  font-size: ${(props): string => (props.size == Sizes.Small ? props.theme.font.fontSizeInputSmall : props.theme.font.fontSizeInputNormal)};
  line-height: ${(props): string => (props.size == Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
  color: ${(props): string =>
    props.disabled
      ? props.theme.palette.inkLighter
      : props.filled
      ? props.theme.colors.colorTextInput
      : props.theme.colors.colorPlaceholderInput};
`;

export const Select = styled.select<{ filled?: boolean; size: Sizes; customValueText: string }>`
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  z-index: 2;
  background: ${(props): string => props.theme.palette.cloudNormal};
  border-radius: ${(props): string => props.theme.border.borderRadiusLarge};
  font-family: ${(props): string => props.theme.fontFamily};
  color: ${(props): string => (props.filled ? props.theme.colors.colorTextInput : props.theme.palette.inkLight)};
  font-size: ${(props): string => (props.size == Sizes.Small ? props.theme.font.fontSizeInputSmall : props.theme.font.fontSizeInputNormal)};
  height: ${(props): string => (props.size == Sizes.Small ? props.theme.size.heightInputSmall : props.theme.size.heightInputNormal)};
  color: ${(props): string => (_.isUndefined(props.customValueText) ? 'inherit' : 'transparent !important')};
  transition: box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;

  > option {
    color: ${(props): string => props.theme.colors.colorTextInput};
  }

  border: 0;
  box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.palette.cloudNormal}`};
  padding: 0px 40px 0px 12px;

  &:hover {
    box-shadow: ${(props): string => `inset 0 0 0 ${props.theme.border.borderWidthInput} ${props.theme.border.borderColorInputHover}`};
  }
`;

//   &:focus {
//     ${formElementFocus}
//   }

//   &:disabled {
//     color: ${({ theme }) => theme.orbit.colorTextInputDisabled};
//     background: ${({ theme }) => theme.orbit.backgroundInputDisabled};
//     cursor: not-allowed;

//     &:hover {
//       box-shadow: inset 0 0 0 1px ${({ theme }) => theme.orbit.borderColorInput};
//     }
//   }

//   /*
//     This fix is needed for case where Select has customValueText and it's autofilled by webkit based browser.
//     In that case autofilled value would be displayed, overflowing customValueText.
//   */
//   ${({ customValueText }) =>
//     customValueText &&
//     `
//     &:-webkit-autofill,
//     &:-internal-autofill-selected {
//       -webkit-text-fill-color: transparent;
//     }
//   `}
//   color: ${({ customValueText }) => customValueText && "transparent"} !important;

//   ${media.largeMobile(css`
//     color: ${({ customValueText }) => customValueText && "transparent"};
//     background-color: ${({ disabled, theme }) =>
//       disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
//     border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
//     box-shadow: inset 0 0 0
//       ${({ theme, error }) =>
//         `${theme.orbit.borderWidthInput} ${
//           error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
//         }`};
//   `)}
// `;
