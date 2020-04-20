import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { Sizes, getSize, getSpacing, SpacingsAfter } from '../../modules';
import getIconSpacing from './getIconSpacing';
import getColor from './getColor';
import getWidth from './getWidth';
import { Tokens, Types, ButtonStates } from './const';
import getSizeToken from './getSizeToken';
import { StyledSpinner } from '../Loading';
import getFocus from './getFocus';
import getButtonBoxShadow from './getButtonBoxShadow';
import getButtonSpacing from './getButtonSpacing';

type IconContainerProps = {
  size: Sizes;
  type: Types;
  onlyIcon: boolean;
  bordered?: boolean;
};

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background ${(props): string => props.theme.duration.durationFast} ease-in-out,
    box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;
  color: ${(props): string =>
    props.bordered
      ? getColor(Tokens.colorTextButtonBordered, props.type, props.theme)
      : getColor(Tokens.colorTextButton, props.type, props.theme)};
  margin: ${(props): string => getIconSpacing(props.size, props.onlyIcon, props.theme)};

  > svg {
    width: ${(props): string => getSize(props.theme)(props.size)};
    height: ${(props): string => getSize(props.theme)(props.size)};
  }
`;

type StyledButtonContentProps = {
  loading?: boolean;
};

export const StyledButtonContent = styled.span<StyledButtonContentProps>`
  visibility: ${(props): string => (props.loading ? 'hidden' : 'inherirt')};
  height: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonContentChildren = styled.span`
  display: inline-block;
`;

export type StyledButtonProps = {
  buttonType: Types;
  size: Sizes;
  fullWidth?: boolean;
  width?: string;
  onlyIcon: boolean;
  bordered: boolean;
  circled?: boolean;
  disabled: boolean;
  spaceAfter: SpacingsAfter;
  hasRightIcon: boolean;
  hasLeftIcon: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  appearance: none;
  text-decoration: none;
  width: ${(props): string => getWidth(props.size, props.theme, props.fullWidth, props.width, props.onlyIcon)};
  flex: ${(props): string => (props.fullWidth ? '1 1 auto' : '0 0 auto')};
  max-width: 100%;
  height: ${(props): string => getSizeToken(Tokens.heightButton, props.size, props.theme)};
  background: ${(props): string =>
    props.bordered
      ? getColor(Tokens.backgroundButtonBordered, props.buttonType, props.theme)
      : getColor(Tokens.backgroundButton, props.buttonType, props.theme)};
  color: ${(props): string =>
    props.bordered
      ? getColor(Tokens.colorTextButtonBordered, props.buttonType, props.theme)
      : getColor(Tokens.colorTextButton, props.buttonType, props.theme)};
  border: 0;
  border-radius: ${(props): string =>
    props.circled ? getSizeToken(Tokens.heightButton, props.size, props.theme) : props.theme.border.borderRadiusNormal};
  min-width: ${(props): string => (props.circled ? getSizeToken(Tokens.heightButton, props.size, props.theme) : 'initial')};
  font-family: ${(props): string => props.theme.fontFamily};
  font-weight: ${(props): string => `${props.theme.font.fontWeightBold}`};
  font-size: ${(props): string => getSizeToken(Tokens.fontSizeButton, props.size, props.theme)};
  line-height: 1.4;
  cursor: ${(props): string => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${(props): string => (props.disabled ? props.theme.opacity.buttonDisabled.toString() : 'initial')};
  margin-bottom: ${(props): string => getSpacing(props.theme)(props.spaceAfter)};
  padding: ${(props): string => getButtonSpacing(props.theme, props.onlyIcon, props.hasRightIcon, props.hasLeftIcon, props.size)};
  ${(props): FlattenSimpleInterpolation | null =>
    getButtonBoxShadow(ButtonStates.Default, props.buttonType, props.bordered, props.disabled, props.theme)};

  &:hover {
    ${(props): FlattenSimpleInterpolation | undefined =>
    !props.disabled
      ? css`
            background: ${props.bordered
    ? getColor(Tokens.backgroundButtonBorderedHover, props.buttonType, props.theme)
    : getColor(Tokens.backgroundButtonHover, props.buttonType, props.theme)};
            color: ${props.bordered
    ? getColor(Tokens.colorTextButtonBorderedHover, props.buttonType, props.theme)
    : getColor(Tokens.colorTextButton, props.buttonType, props.theme)}!important;
            ${getButtonBoxShadow(ButtonStates.Hover, props.buttonType, props.bordered, props.disabled, props.theme)};
            & ${/* sc-selector */ IconContainer} {
              color: ${props.bordered
    ? getColor(Tokens.colorTextButtonBorderedHover, props.buttonType, props.theme)
    : getColor(Tokens.colorTextButton, props.buttonType, props.theme)};
            }
          `
      : undefined};
  }

  &:active {
    ${(props): FlattenSimpleInterpolation | undefined =>
    !props.disabled
      ? css`
            background: ${props.bordered
    ? getColor(Tokens.backgroundButtonBorderedActive, props.buttonType, props.theme)
    : getColor(Tokens.backgroundButtonActive, props.buttonType, props.theme)};
            color: ${props.bordered
    ? getColor(Tokens.colorTextButtonBorderedActive, props.buttonType, props.theme)
    : getColor(Tokens.colorTextButton, props.buttonType, props.theme)}!important;
            ${getButtonBoxShadow(ButtonStates.Active, props.buttonType, props.bordered, props.disabled, props.theme)};
            & ${/* sc-selector */ IconContainer} {
              color: ${props.bordered
    ? getColor(Tokens.colorTextButtonBorderedActive, props.buttonType, props.theme)
    : getColor(Tokens.colorTextButton, props.buttonType, props.theme)};
            }
          `
      : undefined};
  }
  ${(props): FlattenSimpleInterpolation => getFocus(props.buttonType, props.bordered, props.disabled, props.theme)};
  ${/* sc-selector */ StyledSpinner} {
    width: ${(props): string => getSizeToken(Tokens.loadingWidth, props.size, props.theme)};
    height: ${(props): string => getSizeToken(Tokens.loadingHeight, props.size, props.theme)};
  }
`;
