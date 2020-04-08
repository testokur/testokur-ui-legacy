import styled, { keyframes } from 'styled-components';

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
  margin-left: 6px;
  animation: ${LoaderAnimation} 1.25s infinite ease -in -out;
  background: ${(props): string => props.theme.palette.inkLighter};

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

export const StyledLoadingText = styled.div`
  font-family: ${(props): string => props.theme.fontFamily};
  font-size: ${(props): string => props.theme.font.fontSizeTextNormal};
  color: ${(props): string => props.theme.colors.colorTextLoading};
  line-height: ${(props): string => props.theme.lineHeight.lineHeightTextNormal};
`;
// const StyledLoadingText = styled.div`
//   margin-top: ${({ theme, type }) => type === TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceMedium};
//   margin-${left}: ${({ theme, type }) =>
//   type !== TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceSmall};
// `;
