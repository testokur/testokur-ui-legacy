import React from 'react';
import StyledButtonPrimitive from './styled';
import ButtonPrimitiveContent from './components/ButtonPrimitiveContent';
import ButtonPrimitiveIconContainer from './components/ButtonPrimitiveIconContainer';
import ButtonPrimitiveContentChildren from './components/ButtonPrimitiveContentChildren';
import { Loading, LoadingTypes } from '../Loading';
import { ButtonProps } from '../Button';
import { isUndefined } from 'testokur-utils';

type IconProps = {
  width?: string;
  height?: string;
  leftMargin?: string;
  rightMargin?: string;
};

type Props = ButtonProps & {
  icons?: IconProps;
};

const ButtonPrimitive = React.forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const { loading, disabled, children, iconLeft, iconRight, icons } = props;
  const { width, height, leftMargin, rightMargin } = icons ?? {};
  const isDisabled = loading || disabled;
  const onlyIcon = Boolean(iconLeft && !children);
  return (
    <StyledButtonPrimitive forwardedRef={ref} onlyIcon={onlyIcon} disabled={isDisabled}>
      {loading && <Loading type={LoadingTypes.ButtonLoader} />}
      <ButtonPrimitiveContent loading={loading}>
        {iconLeft && (
          <ButtonPrimitiveIconContainer width={width} height={height} margin={leftMargin}>
            {iconLeft}
          </ButtonPrimitiveIconContainer>
        )}
        {isUndefined(children) ? <></> : <ButtonPrimitiveContentChildren>{children}</ButtonPrimitiveContentChildren>}
        {iconRight && (
          <ButtonPrimitiveIconContainer width={width} height={height} margin={rightMargin}>
            {iconRight}
          </ButtonPrimitiveIconContainer>
        )}
      </ButtonPrimitiveContent>
    </StyledButtonPrimitive>
  );
});

ButtonPrimitive.displayName = 'ButtonPrimitive';

export default ButtonPrimitive;
