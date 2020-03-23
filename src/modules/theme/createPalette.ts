export interface Palette {
  primary: string;
  secondary: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
  const { primary = '#15A5EF', secondary = '#051CA1' } = palette;

  return {
    primary,
    secondary,
  };
};

export default createPalette;
