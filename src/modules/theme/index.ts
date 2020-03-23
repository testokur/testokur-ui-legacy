import createPalette, { Palette, PaletteInput } from './createPalette';

export interface Theme {
  palette: Palette;
}

export interface ThemeInput {
  palette?: PaletteInput;
}

const createTheme = (options: ThemeInput): Theme => {
  const { palette: paletteInput = {} } = options || {};

  const palette = createPalette(paletteInput);

  return {
    palette,
  };
};

export default createTheme;
