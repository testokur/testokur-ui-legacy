import styled from 'styled-components';

export const Input = styled.input``;

export const Label = styled.label``;

export const Container = styled.div``;

export const TextArea = styled.textarea<{ fullHeight?: boolean; disabled?: boolean }>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }): string | undefined => (fullHeight ? '100%' : undefined)};
  padding: '12px';
  border-radius: '6px';
  box-shadow: inset 0 0 0 '#EFF2F5';
  background-color: '#EFF2F5';
  color: ${({ disabled }): string => (disabled ? '#BAC7D5' : '#252A31')};
  font-size: 14px;
  line-height: 20px;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'text')};
  font-family: "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif";
  transition: box-shadow 0.15s ease-in-out;
  min-height: 44px;
  flex: ${({ fullHeight }): string | undefined => (fullHeight ? '1' : undefined)};
  resize: none;

  &::placeholder {
    color: ${({ disabled }): string => (disabled ? '#BAC7D5' : '#5F738C')};
  }

  &:hover {
    box-shadow: ${({ disabled }): string | undefined => (!disabled ? 'inset 0 0 0 1px  "#A6B6C8"' : undefined)};
  }

  &:focus {
    outline: 0;
    box-shadow: 0;
  }
`;
