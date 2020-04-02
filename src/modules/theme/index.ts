import createPalette, { PaletteInput } from './createPalette';
import border, { Border } from './border';
import spacing, { Spacing } from './spacing';
import duration, { Duration } from './duration';
import colors, { Colors } from './colors';
import lineHeight, { LineHeight } from './lineHeight';
import font, { Font } from './font';
import globalStyle from './globalStyle';
import { size, Size } from './size';
import opacity, { Opacity } from './opacity';
import { TestOkurTheme } from './TestOkurTheme';

export interface ThemeInput {
  palette: PaletteInput;
  border: Border;
  spacing: Spacing;
  duration: Duration;
  colors: Colors;
  lineHeight: LineHeight;
  font: Font;
  size: Size;
  opacity: Opacity;
}

const createTheme = (options: Partial<ThemeInput>): TestOkurTheme => {
  const { palette: paletteInput = {} } = options || {};

  const palette = createPalette(paletteInput);

  return {
    palette,
    border,
    spacing,
    duration,
    colors,
    fontFamily: "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    lineHeight,
    font,
    size,
    opacity,
  };
};

export { TestOkurTheme, createTheme, globalStyle as GlobalStyle };
