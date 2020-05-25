import styled from 'styled-components';
import { isUndefined } from 'testokur-utils';
import { Sizes, getSize } from '../../modules';
import getFontSize from './getFontSize';

export type StyledBadgeProps = {
  background: string;
  foregroundColor: string;
  borderColor?: string;
};

export const StyledBadge = styled.div<StyledBadgeProps>`
  font-family: ${(props): string => props.theme.fontFamily};
  display: inline-flex;
  flex: 0 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  line-height: 14px;
  min-height: ${(props): string => props.theme.size.heightBadge};
  font-size: ${(props): string => props.theme.font.fontSizeTextSmall};
  font-weight: ${(props): number => props.theme.font.fontWeightMedium};
  background: ${(props): string => props.background};
  color: ${(props): string => props.foregroundColor};
  border-radius: ${(props): string => props.theme.border.borderRadiusBadge};
  padding: ${(props): string => props.theme.spacing.paddingBadge};
  border: ${(props): string => (isUndefined(props.borderColor) ? '' : `1px solid ${props.borderColor}`)};
`;

export const IconContainer = styled.div<{ size: Sizes }>`
  display: flex;
  flex-shrink: 0;
  margin: '0px 4px 0px 0px';
  svg {
    width: ${(props): string => getSize(props.theme)(props.size)};
    height: ${(props): string => getSize(props.theme)(props.size)};
  }
`;

export const StyledBadgeContent = styled.div<{ size: Sizes }>`
  padding: 5px 0;
  line-height: 1;
  font-size: ${(props): string => getFontSize(props.size, props.theme)};
`;
