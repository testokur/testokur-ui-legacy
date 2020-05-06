import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  font-family: ${(props): string => props.theme.fontFamily};
  margin-bottom: ${(props): string => props.theme.spacing.spaceXXSmall};
  cursor: pointer;
  border-bottom: 1px solid ${(props): string => props.theme.palette.cloudNormal};

  &:last-child,
  &:last-of-type {
    margin: 0;
    border: none;
  }

  background-color: ${(props): string => props.theme.palette.white};
  padding: ${(props): string => props.theme.spacing.spaceSmall};
  transition: background-color 0.05s ease-in-out;

  &:focus,
  &:hover {
    background-color: ${(props): string => props.theme.palette.cloudLight};
    outline: none;
  }
`;

export default StyledListItem;
