import 'styled-components';
import { TestOkurTheme } from './TestOkurTheme';

declare module 'styled-components' {
  export type DefaultTheme = TestOkurTheme;
}
