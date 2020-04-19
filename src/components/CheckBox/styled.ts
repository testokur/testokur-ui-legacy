import styled from 'styled-components';
import { device, convertHexToRgba } from '../../modules';

type IconContainerProps = {
  checked?: boolean;
};

export const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props): string => (props.checked ? props.theme.palette.blueNormal : props.theme.colors.backgroundInput)};
  height: ${(props): string => props.theme.size.checkbox};
  width: ${(props): string => props.theme.size.checkbox};
  border-radius: ${(props): string => props.theme.border.borderRadiusLarge};
  transform: scale(1);
  transition: all ${(props): string => props.theme.duration.durationFast} ease-in-out;

  & > svg {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${(props): string => (props.checked ? props.theme.palette.blueDark : props.theme.colors.backgroundInput)};
  }
  @media ${device.tablet} {
    border-radius: ${(props): string => props.theme.border.borderRadiusNormal};
  }
`;

type LabelProps = {
  disabled?: boolean;
  checked?: boolean;
};

export const Label = styled.label<LabelProps>`
  font-family: ${(props): string => props.theme.fontFamily};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: self-start;
  position: relative;
  opacity: ${(props): number => (props.disabled ? props.theme.opacity.checkboxDisabled : 1)};
  cursor: ${(props): string => (props.disabled ? 'not-allowed' : 'pointer')};

  ${IconContainer} {
    color: ${(props): string =>
    props.disabled ? props.theme.colors.colorIconCheckboxRadioDisabled : props.theme.colors.colorIconCheckboxRadio};
    border: 2px solid ${(props): string => (props.checked ? props.theme.palette.blueDark : props.theme.border.borderColorCheckboxRadio)};
  }

  &:hover ${IconContainer} {
    box-shadow: none;
    border-color: ${(props): string =>
    !props.disabled && props.checked ? props.theme.palette.blueDark : props.theme.border.borderColorCheckboxRadioHover};
  }

  @media ${device.mobileL} {
    ${IconContainer} {
      border-width: 1px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props): string => `0 0 0 ${props.theme.spacing.spaceXSmall}`};
  flex: 1;
`;

export const LabelText = styled.span`
  font-family: ${(props): string => props.theme.fontFamily};
  font-weight: ${(props): number => props.theme.font.fontWeightNormal};
  font-size: ${(props): string => props.theme.font.fontSizeFormLabel};
  color: ${(props): string => props.theme.colors.colorFormLabel};
  line-height: ${(props): string => props.theme.size.checkbox};
`;

export const Info = styled.span`
  font-size: ${(props): string => props.theme.font.fontSizeFormFeedback};
  color: ${(props): string => props.theme.colors.colorInfoCheckBoxRadio};
  line-height: ${(props): string => props.theme.lineHeight.lineHeightTextSmall};
`;

export const Input = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:checked ~ ${/* sc-selector */ TextContainer} > ${LabelText} {
    font-weight: ${(props): number => props.theme.font.fontWeightMedium};
  }
  &:checked + ${/* sc-selector */ IconContainer} > svg {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    border: ${(props): string => `1px sold ${props.theme.border.borderColorCheckboxRadioFocus}`};
    box-shadow: 0 0 0 3px ${(props): string => convertHexToRgba(props.theme.border.borderColorInputFocus, 15)};
  }

  &:active + ${IconContainer} {
    border-color: ${(props): string => props.theme.border.borderColorCheckboxRadioActive};
    transform: ${(props): string => (!props.disabled ? 'scale(0.95)' : 'inherit')};
  }
`;
