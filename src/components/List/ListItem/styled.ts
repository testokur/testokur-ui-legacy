import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  font-family: ${(props): string => props.theme.fontFamily};
  margin-bottom: ${(props): string => props.theme.spacing.spaceXXSmall};

  &:last-child,
  &:last-of-type {
    margin: 0;
  }
`;

export default StyledListItem;
