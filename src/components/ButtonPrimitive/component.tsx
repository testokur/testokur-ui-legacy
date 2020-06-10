import React, { RefObject } from 'react';
import { isUndefined } from 'testokur-utils';
import StyledButtonPrimitive, { StyledProps, Props as OriginProps } from './styled';
import ButtonPrimitiveContent from './components/ButtonPrimitiveContent';
import { ButtonPrimitiveIconContainer } from './components/ButtonPrimitiveIconContainer';
import ButtonPrimitiveContentChildren from './components/ButtonPrimitiveContentChildren';
import { Loading, LoadingTypes } from '../Loading';
import { SpacingsAfter } from '../../modules';

type Props = StyledProps &
OriginProps & {
  loading?: boolean;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const ButtonPrimitive = React.forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const {
    loading,
    fontWeight,
    fontSize,
    disabled,
    children,
    iconLeft,
    iconRight,
    icons,
    asComponent,
    boxShadow,
    boxShadowHover,
    boxShadowFocus,
    boxShadowActive,
    foregroundActive,
    background,
    backgroundHover,
    foregroundHover,
    circled,
    dataTestId,
    external,
    foreground,
    fullWidth,
    href,
    height,
    onClick,
  } = props;
  const { width, height: iconsHeight, leftMargin, rightMargin } = icons ?? {};
  const isDisabled = loading || disabled;
  const onlyIcon = Boolean(iconLeft && !children);
  return (
    <StyledButtonPrimitive
      href={href}
      fullWidth={fullWidth}
      fontSize={fontSize}
      foreground={foreground}
      fontWeight={fontWeight}
      external={external}
      dataTestId={dataTestId}
      circled={circled}
      boxShadow={boxShadow}
      boxShadowHover={boxShadowHover}
      boxShadowFocus={boxShadowFocus}
      boxShadowActive={boxShadowActive}
      foregroundActive={foregroundActive}
      backgroundHover={backgroundHover}
      foregroundHover={foregroundHover}
      forwardedRef={ref as RefObject<HTMLAnchorElement> & RefObject<HTMLButtonElement>}
      onlyIcon={onlyIcon}
      asComponent={asComponent}
      disabled={isDisabled}
      height={height}
      background={background}
      spacingsAfter={SpacingsAfter.Normal}
      onClick={onClick}
    >
      {loading && <Loading type={LoadingTypes.ButtonLoader} />}
      <ButtonPrimitiveContent loading={loading}>
        {iconLeft && (
          <ButtonPrimitiveIconContainer width={width} height={iconsHeight} margin={leftMargin}>
            {iconLeft}
          </ButtonPrimitiveIconContainer>
        )}
        {isUndefined(children) ? <></> : <ButtonPrimitiveContentChildren>{children}</ButtonPrimitiveContentChildren>}
        {iconRight && (
          <ButtonPrimitiveIconContainer width={width} height={iconsHeight} margin={rightMargin}>
            {iconRight}
          </ButtonPrimitiveIconContainer>
        )}
      </ButtonPrimitiveContent>
    </StyledButtonPrimitive>
  );
});

ButtonPrimitive.displayName = 'ButtonPrimitive';

export default ButtonPrimitive;
