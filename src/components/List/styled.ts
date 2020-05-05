import styled from 'styled-components';

const StyledList = styled.ul`
  font-family: ${(props): string => props.theme.fontFamily};
`;

export default StyledList;
