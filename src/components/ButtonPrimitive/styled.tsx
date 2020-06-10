import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import React, { RefObject } from 'react';
import { isDefined } from 'testokur-utils';
import { Testable, getSpacing, SpacingsAfter } from '../../modules';
import { StyledButtonPrimitiveIconContainer } from './components/ButtonPrimitiveIconContainer';
import { StyledSpinner } from '../Loading';

export type Props = Testable &
React.ButtonHTMLAttributes<HTMLButtonElement> &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly asComponent?: keyof JSX.IntrinsicElements;
  readonly submit?: boolean;
  readonly ariaExpanded?: boolean;
  readonly ariaControls?: string;
  readonly href?: string;
  readonly external?: boolean;
  readonly forwardedRef?: RefObject<HTMLAnchorElement> & RefObject<HTMLButtonElement>;
};

export type IconsPros = {
  readonly width: string;
  readonly height: string;
  readonly leftMargin: string;
  readonly rightMargin: string;
  readonly foreground: string;
  readonly foregroundHover: string;
  readonly foregroundActive: string;
};

export type StyledProps = {
  readonly foreground?: string;
  readonly spacingsAfter: SpacingsAfter;
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
  readonly href?: string;
  readonly asComponent?: keyof JSX.IntrinsicElements;
  readonly circled?: boolean;
  readonly padding?: string;
  readonly background?: string;
  readonly fontWeight?: string;
  readonly fontSize?: string;
  readonly height?: string;
  readonly width?: string;
  readonly onlyIcon?: boolean;
  readonly icons?: IconsPros;
  readonly foregroundHover?: string;
  readonly foregroundActive?: string;
  readonly backgroundHover?: string;
  readonly backgroundActive?: string;
  readonly backgroundFocus?: string;
  readonly boxShadow?: string;
  readonly boxShadowHover?: string;
  readonly boxShadowFocus?: string;
  readonly boxShadowActive?: string;
};

const StyledButtonPrimitive = styled(
  ({
    asComponent = 'button',
    dataTestId,
    submit,
    disabled,
    forwardedRef,
    ariaControls,
    ariaExpanded,
    title,
    className,
    href,
    external,
    tabIndex,
    onClick,
    role,
    children,
  }: Props) => {
    const isButtonWithHref = asComponent === 'button' && isDefined(href);
    const Component = isButtonWithHref ? 'a' : (asComponent as 'a' | 'button');
    const buttonType = submit ? 'submit' : 'button';

    return (
      <Component
        ref={forwardedRef}
        data-testid={dataTestId}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        className={className}
        disabled={disabled}
        href={!disabled ? href : undefined}
        target={!disabled && href && external ? '_blank' : undefined}
        rel={!disabled && href && external ? 'noopener noreferrer' : undefined}
        tabIndex={tabIndex}
        onClick={onClick}
        role={role}
      >
        {children}
      </Component>
    );
  }
)<StyledProps>`
  ${(props): FlattenSimpleInterpolation => css`
    height: ${props.height};
    position: relative;
    display: ${props.href || props.asComponent === 'a' ? 'inline-flex' : 'flex'};
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    appearance: none;
    text-decoration: none;
    flex: ${props.fullWidth ? '1 1 auto' : '0 0 auto'};
    max-width: 100%; // to ensure that Buttons content wraps in IE
    background: ${props.background};
    color: ${props.foreground}!important;
    border: 0;
    padding: ${props.padding};
    border-radius: ${props.circled ? props.height : props.theme.border.borderRadiusNormal};
    font-family: ${props.theme.fontFamily};
    font-weight: ${props.fontWeight || props.theme.font.fontWeightMedium};
    font-size: ${props.fontSize};
    line-height: 1.4; // preventing inheriting with safe value
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    transition: all ${props.theme.duration.durationFast} ease-in-out !important;
    outline: 0;
    opacity: ${props.disabled && props.theme.opacity.buttonDisabled};
    margin-bottom: ${getSpacing(props.theme)(props.spacingsAfter)};
    width: ${props.fullWidth ? '100%' : props.width || (props.onlyIcon && props.height) || 'auto'};
    box-shadow: ${props.boxShadow};

    ${/* sc-selector */ StyledButtonPrimitiveIconContainer} {
      color: ${props.icons && props.icons.foreground};
    }

    ${/* sc-selector */ StyledSpinner} {
      width: ${props.icons && props.icons.width};
      height: ${props.icons && props.icons.height};
    }

    &:hover {
      ${!props.disabled &&
      css`
        background: ${props.backgroundHover};
        color: ${props.foregroundHover};
        box-shadow: ${props.boxShadowHover};

        ${/* sc-selector */ StyledButtonPrimitiveIconContainer} {
          color: ${props.icons && props.icons.foregroundHover};
        }
      `};
    }

    &:active {
      ${!props.disabled &&
      css`
        background: ${props.backgroundActive};
        box-shadow: ${props.boxShadowActive};
        color: ${props.foregroundActive};
        ${/* sc-selector */ StyledButtonPrimitiveIconContainer} {
          color: ${props.icons && props.icons.foregroundActive};
        }
      `};
    }

    :focus {
      box-shadow: ${props.boxShadowFocus};
      background: ${props.backgroundFocus};
    }

    :focus:not(:focus-visible) {
      box-shadow: none;
      background: ${props.background};
    }
    :-moz-focusring,
    :focus-visible {
      box-shadow: ${props.boxShadowFocus};
      background: ${props.backgroundFocus};
    }
  `};
`;

export default StyledButtonPrimitive;
