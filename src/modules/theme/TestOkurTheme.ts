import { Palette } from './createPalette';
import { Border } from './border';
import { Spacing } from './spacing';
import { Duration } from './duration';
import { Colors } from './colors';
import { LineHeight } from './lineHeight';
import { Font } from './font';
import { Size } from './size';
import { Opacity } from './opacity';

export interface TestOkurTheme {
  palette: Palette;
  border: Border;
  spacing: Spacing;
  duration: Duration;
  colors: Colors;
  fontFamily: string;
  lineHeight: LineHeight;
  font: Font;
  size: Size;
  opacity: Opacity;
}
