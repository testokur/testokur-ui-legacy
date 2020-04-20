import styled from 'styled-components';
import { Types, Tokens } from './const';
import getHeadingToken from './getHeadingToken';
import { getSpacing, SpacingsAfter } from '../../modules';

export type StyledHeadingProps = {
  type: Types;
  spacingsAfter: SpacingsAfter;
};

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-family: ${(props): string => props.theme.fontFamily};
  font-size: ${(props): string | number => getHeadingToken(Tokens.SizeHeading, props.theme, props.type)};
  font-weight: ${(props): string | number => getHeadingToken(Tokens.WeightHeading, props.theme, props.type)};
  color: ${(props): string => props.theme.colors.colorHeading};
  line-height: ${(props): string | number => getHeadingToken(Tokens.LineHeight, props.theme, props.type)};
  text-transform: ${(props): string => (props.type === Types.Title5 ? 'uppercase' : '')};
  margin: 0;
  margin-bottom: ${(props): string => getSpacing(props.theme)(props.spacingsAfter)};
`;
