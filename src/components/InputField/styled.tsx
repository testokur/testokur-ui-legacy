import styled from 'styled-components';
// TODO: Use theming here

export const Input = styled.input``;

export const TextArea = styled.textarea<{ fullHeight?: boolean; disabled?: boolean }>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 1px solid transparent;
  overflow: auto;
  min-height: 44px;
  height: ${({ fullHeight }) => fullHeight && '100%'};
  padding: 12px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 #eff2f5;
  background-color: #eff2f5;
  color: ${({ disabled }) => (disabled ? '#BAC7D5' : '#252A31')};
  font-size: 14px;
  line-height: 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  transition: box-shadow 0.15s ease-in-out;
  flex: ${({ fullHeight }) => fullHeight && '1'};

  &:hover {
    box-shadow: ${({ disabled }) => !disabled && 'inset 0 0 0 1px'};
  }
  &:focus {
    outline: none;
  }
`;
