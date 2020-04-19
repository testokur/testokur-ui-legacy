import styled, { keyframes } from 'styled-components';
import { Type, getHeight } from './const';

const LoaderAnimation = keyframes`
  0% {opacity: .3; transform:translateY(0px);}
  20% {opacity: 1; transform: translateY(-3px);}
  40%  {opacity: .3; transform:translateY(0px);}
  100%  {opacity: .3; transform:translateY(0px);}
`;
const SpinnerAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.svg`
  width: 40px;
  height: 40px;
  animation: ${SpinnerAnimation} 0.75s linear infinite;
`;

export const StyledLoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  animation: ${LoaderAnimation} 1.25s infinite ease-in-out;
  background: ${(props): string => props.theme.palette.inkLighter};

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

type StyledLoadingTextProps = {
  type: Type;
};

export const StyledLoadingText = styled.div<StyledLoadingTextProps>`
  font-family: ${(props): string => props.theme.fontFamily};
  font-size: ${(props): string => props.theme.font.fontSizeTextNormal};
  color: ${(props): string => props.theme.colors.colorTextLoading};
  line-height: ${(props): string => props.theme.lineHeight.lineHeightTextNormal};
  margin-top: ${(props): string => (props.type === Type.PageLoader ? props.theme.spacing.spaceMedium : 'initial')};
  margin-left: ${(props): string => (props.type !== Type.PageLoader ? props.theme.spacing.spaceSmall : 'initial')};
`;

type StyledSpinnerCircleProps = {
  type: Type;
};

export const StyledSpinnerCircle = styled.circle<StyledSpinnerCircleProps>`
  fill: transparent;
  stroke: ${(props): string => (props.type === Type.ButtonLoader ? 'currentColor' : props.theme.palette.inkLighter)};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 128px;
  stroke-dashoffset: 64px;
`;

type StyledLoadingProps = {
  type?: Type;
};

export const StyledLoading = styled.div<StyledLoadingProps>`
  position: ${(props): string => (props.type === Type.ButtonLoader ? 'absolute' : 'initial')};
  top: ${(props): string => (props.type === Type.ButtonLoader ? '0' : 'initial')};
  width: ${(props): string => (props.type === Type.ButtonLoader ? '100%' : 'initial')};
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  justify-content: ${(props): string => (props.type === Type.SearchLoader ? 'start' : 'center')};
  flex-direction: ${(props): string => (props.type === Type.PageLoader ? 'column' : 'row')};
  display: ${(props): string => (props.type === Type.InlineLoader ? 'inline-flex' : 'flex')};
  padding: ${(props): string => (props.type !== Type.InlineLoader ? props.theme.spacing.paddingLoading : 'initial')};
  left: ${(props): string => (props.type === Type.ButtonLoader ? '0' : 'initial')};
  min-height: ${(props): string => (props.type === Type.InlineLoader ? '19px' : 'initial')};
  height: ${(props): string => getHeight(props.type as string)};
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
