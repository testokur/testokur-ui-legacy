import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    :root{
        background: ${({ theme }) => theme.colors.background};
    }
`;

export default globalStyle;
