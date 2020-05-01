export interface Palette {
  primary: string;
  secondary: string;
  inkLighter: string;
  inkLight: string;
  cloudNormal: string;
  cloudLight: string;
  blueNormal: string;
  blueDark: string;
  blueLight: string;
  greenLight: string;
  orangeLight: string;
  redLight: string;
  productNormal: string;
  greenNormal: string;
  orangeNormal: string;
  redNormal: string;
  inkNormal: string;
  white: string;
  greenDark: string;
  orangeDark: string;
  redDark: string;
  cloudDark: string;
  blueLightHover: string;
  greenLightHover: string;
  orangeLightHover: string;
  redLightHover: string;
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
    white = '#FFFFFF',
    blueLight = '#E8F4FD',
    greenLight = '#EBF4EC',
    orangeLight = '#FDF0E3',
    redLight = '#FAEAEA',
    cloudLight = '#F5F7F9',
    greenDark = '#2B7336',
    orangeDark = '#A25100',
    redDark = '#970C0C',
    cloudDark = '#E8EDF1',
    blueLightHover = '#D0E9FB',
    greenLightHover = '#D7EAD9',
    orangeLightHover = '#FAE2C7',
    redLightHover = '#F4D2D2',
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
    white,
    blueLight,
    greenLight,
    orangeLight,
    redLight,
    cloudLight,
    greenDark,
    orangeDark,
    redDark,
    cloudDark,
    blueLightHover,
    greenLightHover,
    orangeLightHover,
    redLightHover,
  };
};

export default createPalette;
