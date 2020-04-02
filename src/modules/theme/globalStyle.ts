import { createGlobalStyle } from 'styled-components';
import { TestOkurTheme } from './TestOkurTheme';

const globalStyle = createGlobalStyle<{ theme: TestOkurTheme }>`
    :root{
        background: ${({ theme }): string => theme.colors.background};
    }
`;

export default globalStyle;
