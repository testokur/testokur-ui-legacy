export interface Palette {
  primary: string;
  secondary: string;
  inkLighter: string;
  inkLight: string;
  cloudNormal: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
  const { primary = '#15A5EF', secondary = '#051CA1', inkLighter = '#BAC7D5', inkLight = '#5F738C', cloudNormal = '#EFF2F5' } = palette;

  return {
    primary,
    secondary,
    inkLighter,
    inkLight,
    cloudNormal,
  };
};

export default createPalette;
