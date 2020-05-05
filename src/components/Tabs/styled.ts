import styled from 'styled-components';

export const StyledTabContainer = styled.div`
  display: flex;
  font-family: ${(props): string => props.theme.fontFamily};
`;

export const StyledSpan = styled.span`
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  transition: all ${(props): string => props.theme.duration.durationFast} ease-in-out;
  border-bottom: 2px solid ${(props): string => props.theme.palette.cloudDark};
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + span {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, ${(props): string => props.theme.palette.cloudDark});
    border-color: ${(props): string => props.theme.palette.blueDark};
  }
`;

export const StyledTab = styled.label`
  cursor: pointer;
  border: ${(props): string => `1px solid ${props.theme.palette.cloudDark}`};
  flex: 1;
  display: flex;

  &:hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, ${(props): string => props.theme.palette.cloudDark});
  }
`;
