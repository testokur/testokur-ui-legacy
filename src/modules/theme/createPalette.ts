export interface Palette {
  primary: string;
  secondary: string;
  inkLighter: string;
  inkLight: string;
  cloudNormal: string;
  blueNormal: string;
  blueDark: string;
  productNormal: string;
  greenNormal: string;
  orangeNormal: string;
  redNormal: string;
  inkNormal: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
  const {
    primary = '#15A5EF',
    secondary = '#051CA1',
    inkLighter = '#BAC7D5',
    inkLight = '#5F738C',
    cloudNormal = '#EFF2F5',
    blueNormal = '#0172CB',
    blueDark = '#005AA3',
    productNormal = '#00A991',
    greenNormal = '#1D7228',
    orangeNormal = '#DC7C05',
    redNormal = '#B91919',
    inkNormal = '#252A31',
  } = palette;

  return {
    primary,
    secondary,
    inkLighter,
    inkLight,
    cloudNormal,
    blueNormal,
    blueDark,
    productNormal,
    greenNormal,
    orangeNormal,
    redNormal,
    inkNormal,
  };
};

export default createPalette;
