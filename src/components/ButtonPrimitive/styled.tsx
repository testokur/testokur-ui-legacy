import styled from 'styled-components';
import React, { RefObject } from 'react';
import { Testable } from '../../modules';
import { isUndefined } from 'testokur-utils';

type Props = Testable &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asComponent?: keyof JSX.IntrinsicElements;
    submit?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
    href?: string;
    external?: boolean;
    forwardedRef?: RefObject<HTMLAnchorElement> & RefObject<HTMLButtonElement>;
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
    const isButtonWithHref = asComponent === 'button' && !isUndefined(href);
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
)``;

export default StyledButtonPrimitive;
