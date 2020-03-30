import styled from 'styled-components';

enum Size {
  Small,
  Medium,
  Large,
}

const Icon = styled.svg<{ size: Size }>`
  height: 0;
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
`;
