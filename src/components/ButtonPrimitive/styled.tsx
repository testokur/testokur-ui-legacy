import styled from 'styled-components';
import React from 'react';

const StyledButtonPrimitive = styled(
  ({
    asComponent = 'button',
    dataTest,
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
    children
  }) => {
    const isButtonWithHref = asComponent === 'button' && href;
    const Component = isButtonWithHref ? 'a' : asComponent;
    const buttonType = submit ? 'submit' : 'button';
    return (
      <Component
        ref={forwardedRef}
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        className={className}
        disabled={disabled}
        href={!disabled ? href : null}
        target={!disabled && href && external ? '_blank' : undefined}
        rel={!disabled && href && external ? 'noopener noreferrer' : undefined}
        tabIndex={tabIndex}
        onClick={onClick}
        role={role}
      >
        {children}
      </Component>
    );
  },
);

export default StyledButtonPrimitive;