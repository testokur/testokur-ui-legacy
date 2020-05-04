import styled from 'styled-components';

export const StyledTabContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  font-family: ${(props): string => props.theme.fontFamily};
`;

export const StyledSpan = styled.span`
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + span {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #e0e0e0);
    border-color: red;
  }
`;

export const StyledTab = styled.label`
  cursor: pointer;
  border: 1px solid #ddd;
  flex: 1;
  display: flex;

  &:hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #e0e0e0);
  }
`;
