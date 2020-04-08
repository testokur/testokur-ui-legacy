import styled from 'styled-components';
import { Sizes, getSize } from '../../modules';

export const IconContainer = styled.span<{ size: Sizes; onlyIcon: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background ${(props): string => props.theme.duration.durationFast} ease-in-out,
    box-shadow ${(props): string => props.theme.duration.durationFast} ease-in-out;

  > svg {
    width: ${(props): string => getSize(props.theme)(props.size)};
    height: ${(props): string => getSize(props.theme)(props.size)};
  }
`;

//     margin: ${getIconSpacing()};
//     color: ${({ bordered }) =>
//       bordered ? getTypeToken(TOKENS.colorTextButtonBordered) : getTypeToken(TOKENS.colorTextButton)};
//   `;

export const StyledButtonContent = styled.span<{ loading?: boolean }>`
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
