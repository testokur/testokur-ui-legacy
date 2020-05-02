import styled from 'styled-components';
import { SpacingsAfter, getSpacing } from '../../modules';

export type StyledDividerProps = {
  spacingsAfter: SpacingsAfter;
};

export const StyledDivider = styled.hr<StyledDividerProps>`
  box-sizing: border-box;
  border-style: none;
  margin-top: 0;
  width: 100%;
  height: ${(props): string => props.theme.size.heightSeparator};
  background: ${(props): string => props.theme.colors.backgroundSeparator};
  margin-bottom: ${(props): string => getSpacing(props.theme)(props.spacingsAfter)};
`;
