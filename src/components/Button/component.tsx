import * as React from 'react';
import { Testable, Sizes, SpacingsAfter } from '../../modules';
import { Types } from './const';
import { StyledButton, StyledButtonContent, IconContainer, StyledButtonContentChildren } from './styled';

import { Loading, LoadingTypes } from '../Loading';
import { isUndefined } from '../../utils';

type Props = Testable &
React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: JSX.Element;
  circled?: boolean;
  bordered?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  buttonType: Types;
  size: Sizes;
  submit?: boolean;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  tabIndex?: number;
  ariaExpanded?: boolean;
  ariaControls?: string;
  title?: string;
  spaceAfter?: SpacingsAfter;
  role?: string;
  width?: string;
};

const component = (props: Props): JSX.Element => {
  const {
    onClick,
    loading,
    iconLeft,
    iconRight,
    disabled,
    children,
    size,
    icon,
    type,
    buttonType,
    bordered,
    fullWidth,
    title,
    spaceAfter,
    tabIndex,
    ariaControls,
    ariaExpanded,
    role,
    circled,
    width,
    dataTestId,
  } = props;

  const hasLeftIcon = !isUndefined(iconLeft) || !isUndefined(icon);
  const hasRightIcon = !isUndefined(iconRight) || !isUndefined(icon);
  const sizeIcon = size === Sizes.Small ? Sizes.Small : Sizes.Medium;
  const onlyIcon = (!isUndefined(iconLeft) && isUndefined(children)) ?? false;
  const isDisabled = (loading || disabled) ?? false;

  return (
    <StyledButton
      onClick={onClick}
      hasRightIcon={hasRightIcon}
      hasLeftIcon={hasLeftIcon}
      bordered={bordered ?? false}
      fullWidth={fullWidth ?? false}
      width={width}
      role={role}
      circled={circled}
      tabIndex={tabIndex}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={title}
      spaceAfter={spaceAfter ?? SpacingsAfter.None}
      title={title}
      buttonType={buttonType}
      size={size}
      onlyIcon={onlyIcon}
      disabled={isDisabled}
      type={type}
      data-testid={dataTestId}
    >
      {loading ? <Loading type={LoadingTypes.ButtonLoader} /> : <></>}
      <StyledButtonContent loading={loading}>
        {iconLeft && (
          <IconContainer bordered={bordered} onlyIcon={onlyIcon} size={sizeIcon} type={buttonType}>
            {iconLeft}
          </IconContainer>
        )}
        {isUndefined(children) ? <></> : <StyledButtonContentChildren>{children}</StyledButtonContentChildren>}
        {iconRight && (
          <IconContainer bordered={bordered} onlyIcon={onlyIcon} size={sizeIcon} type={buttonType}>
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonContent>
    </StyledButton>
  );
};

component.defaultProps = {
  size: Sizes.Medium,
  buttonType: Types.Primary,
} as Props;

component.displayName = 'Button';

export default component;
