import 'styled-components';
import { TestOkurTheme } from './TestOkurTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends TestOkurTheme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
