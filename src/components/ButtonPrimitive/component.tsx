import React, { ReactNode, RefObject } from 'react';
import { isUndefined } from 'testokur-utils';
import StyledButtonPrimitive, { IconsPros } from './styled';
import ButtonPrimitiveContent from './components/ButtonPrimitiveContent';
import { ButtonPrimitiveIconContainer } from './components/ButtonPrimitiveIconContainer';
import ButtonPrimitiveContentChildren from './components/ButtonPrimitiveContentChildren';
import { Loading, LoadingTypes } from '../Loading';
import { SpacingsAfter } from '../../modules';

type Props = {
  icons?: IconsPros;
  loading?: boolean;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  ariaExpanded?: boolean;
  ariaControls?: string;
  disabled?: boolean;
  children: ReactNode;
};

const ButtonPrimitive = React.forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const { loading, disabled, children, iconLeft, iconRight, icons } = props;
  const { width, height, leftMargin, rightMargin } = icons ?? {};
  const isDisabled = loading || disabled;
  const onlyIcon = Boolean(iconLeft && !children);
  return (
    <StyledButtonPrimitive
      forwardedRef={ref as RefObject<HTMLAnchorElement> & RefObject<HTMLButtonElement>}
      onlyIcon={onlyIcon}
      disabled={isDisabled}
      spacingsAfter={SpacingsAfter.Normal}
    >
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
