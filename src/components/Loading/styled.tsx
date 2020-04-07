import styled from 'styled-components';

export const StyledLoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 6px;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

// const StyledLoaderCircle = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   margin-${right}: 6px;
//   background: ${({ theme }) => theme.orbit.paletteInkLighter};
//   animation: ${LoaderAnimation} 1.25s infinite ease-in-out;
//   &:nth-child(2) {
//     animation-delay: 0.1s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.2s;
//     margin: 0;
//   }
// `;
