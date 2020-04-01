import createPalette, { Palette, PaletteInput } from './createPalette';
import border, { Border } from './border';
import spacing, { Spacing } from './spacing';
import duration, { Duration } from './duration';
import colors, { Colors } from './colors';
import lineHeight, { LineHeight } from './lineHeight';
import font, { Font } from './font';
import globalStyle from './globalStyle';
import size, { Size } from './size';
import opacity, { Opacity } from './opacity';

export interface Theme {
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

const createTheme = (options: Partial<ThemeInput>): Theme => {
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

export { createTheme, globalStyle as GlobalStyle };
