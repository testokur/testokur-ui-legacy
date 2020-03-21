import styled from 'styled-components';

export const Input = styled.input``;

export const TextArea = styled.textarea<{ fullHeight?: boolean; disabled?: boolean }>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 1px solid transparent;
  overflow: auto;
  min-height: 44px;
  height: ${({ fullHeight }): string | undefined => (fullHeight ? '100%' : undefined)};
  padding: 12px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 #eff2f5;
  background-color: #eff2f5;
  color: ${({ disabled }): string => (disabled ? '#BAC7D5' : '#252A31')};
  font-size: 14px;
  line-height: 20px;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'text')};
  transition: box-shadow 0.15s ease-in-out;
  flex: ${({ fullHeight }): string | undefined => (fullHeight ? '1' : undefined)};

  &:hover {
    box-shadow: ${({ disabled }): string | undefined => (disabled ? undefined : 'inset 0 0 0 1px')};
  }
  &:focus {
    outline: none;
  }
`;
