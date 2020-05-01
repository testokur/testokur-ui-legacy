import { curry, TestOkurTheme, Func } from '../../modules';

const getColor = (theme: TestOkurTheme, token: string, type: string): string => {
  const backgroundMapping = curry<string>({
    Neutral: () => theme.palette.cloudLight,
    Info: () => theme.palette.blueLight,
    Success: () => theme.palette.greenLight,
    Warning: () => theme.palette.orangeLight,
    Critical: () => theme.palette.redLight,
    Dark: () => theme.palette.inkNormal,
    White: () => theme.palette.white,
    InfoInverted: () => theme.palette.blueNormal,
    SuccessInverted: () => theme.palette.greenNormal,
    WarningInverted: () => theme.palette.orangeNormal,
    CriticalInverted: () => theme.palette.redNormal,
  });

  const colorMapping = curry<string>({
    Neutral: () => theme.palette.inkNormal,
    Info: () => theme.palette.blueDark,
    Success: () => theme.palette.greenDark,
    Warning: () => theme.palette.orangeDark,
    Critical: () => theme.palette.redDark,
    Dark: () => theme.palette.white,
    White: () => theme.palette.inkNormal,
    InfoInverted: () => theme.palette.white,
    SuccessInverted: () => theme.palette.white,
    WarningInverted: () => theme.palette.white,
    CriticalInverted: () => theme.palette.white,
  });

  const borderMapping = curry<string>({
    Neutral: () => theme.palette.cloudDark,
    Info: () => theme.palette.blueLightHover,
    Success: () => theme.palette.greenLightHover,
    Warning: () => theme.palette.orangeLightHover,
    Critical: () => theme.palette.redLightHover,
    Dark: () => '',
    White: () => '',
    InfoInverted: () => '',
    SuccessInverted: () => '',
    WarningInverted: () => '',
    CriticalInverted: () => '',
  });

  const mappings = curry<Func<string>>({
    Border: () => borderMapping,
    Color: () => colorMapping,
    Background: () => backgroundMapping,
  });

  return mappings(token)(type);
};

export default getColor;
