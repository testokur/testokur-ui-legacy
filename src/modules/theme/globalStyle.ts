import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    :root{
        background: ${({ theme }): string => theme.colors.background};
    }
`;

export default globalStyle;
