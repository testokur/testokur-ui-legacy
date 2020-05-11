import { curry } from 'testokur-utils';
import { TestOkurTheme, convertHexToRgba, Func } from '../../modules';
import { Types } from './const';

const getColor = (name: string, type: Types, theme: TestOkurTheme): string => {
  const backgroundButtonMappings = curry<string>({
    Primary: () => theme.colors.backgroundButtonPrimary,
    Secondary: () => theme.colors.backgroundButtonSecondary,
    Success: () => theme.colors.backgroundButtonSuccess,
    Info: () => theme.colors.backgroundButtonInfo,
    Warning: () => theme.colors.backgroundButtonWarning,
    Critical: () => theme.colors.backgroundButtonCritical,
  });

  const backgroundButtonHoverMappings = curry<string>({
    Primary: () => theme.colors.backgroundButtonPrimaryHover,
    Secondary: () => theme.colors.backgroundButtonSecondaryHover,
    Success: () => theme.colors.backgroundButtonSuccessHover,
    Info: () => theme.colors.backgroundButtonInfoHover,
    Warning: () => theme.colors.backgroundButtonWarningHover,
    Critical: () => theme.colors.backgroundButtonCriticalHover,
  });

  const backgroundButtonActiveMappings = curry<string>({
    Primary: () => theme.colors.backgroundButtonPrimaryActive,
    Secondary: () => theme.colors.backgroundButtonSecondaryActive,
    Success: () => theme.colors.backgroundButtonSuccessActive,
    Info: () => theme.colors.backgroundButtonInfoActive,
    Warning: () => theme.colors.backgroundButtonWarningActive,
    Critical: () => theme.colors.backgroundButtonCriticalActive,
  });

  const backgroundButtonFocusMappings = curry<string>({
    Primary: () => theme.colors.backgroundButtonPrimary,
    Secondary: () => theme.colors.backgroundButtonSecondary,
    Success: () => theme.colors.backgroundButtonSuccess,
    Info: () => theme.colors.backgroundButtonInfo,
    Warning: () => theme.colors.backgroundButtonWarning,
    Critical: () => theme.colors.backgroundButtonCritical,
  });

  const backgroundButtonBorderedMapping = curry<string>({
    Primary: () => theme.colors.backgroundButtonBordered,
    Secondary: () => theme.colors.backgroundButtonBordered,
    Success: () => theme.colors.backgroundButtonBordered,
    Info: () => theme.colors.backgroundButtonBordered,
    Warning: () => theme.colors.backgroundButtonBordered,
    Critical: () => theme.colors.backgroundButtonBordered,
  });

  const backgroundButtonBorderedHoverMapping = curry<string>({
    Primary: () => theme.colors.backgroundButtonBorderedHover,
    Secondary: () => theme.colors.backgroundButtonBorderedHover,
    Success: () => theme.colors.backgroundButtonBorderedHover,
    Info: () => theme.colors.backgroundButtonBorderedHover,
    Warning: () => theme.colors.backgroundButtonBorderedHover,
    Critical: () => theme.colors.backgroundButtonBorderedHover,
  });

  const backgroundButtonBorderedActiveMapping = curry<string>({
    Primary: () => theme.colors.backgroundButtonBorderedActive,
    Secondary: () => theme.colors.backgroundButtonBorderedActive,
    Success: () => theme.colors.backgroundButtonBorderedActive,
    Info: () => theme.colors.backgroundButtonBorderedActive,
    Warning: () => theme.colors.backgroundButtonBorderedActive,
    Critical: () => theme.colors.backgroundButtonBorderedActive,
  });

  const colorTextButtonMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimary,
    Secondary: () => theme.colors.colorTextButtonSecondary,
    Success: () => theme.colors.colorTextButtonSuccess,
    Info: () => theme.colors.colorTextButtonInfo,
    Warning: () => theme.colors.colorTextButtonWarning,
    Critical: () => theme.colors.colorTextButtonCritical,
  });

  const colorTextButtonBorderedMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimaryBordered,
    Secondary: () => theme.colors.colorTextButtonSecondaryBordered,
    Success: () => theme.colors.colorTextButtonSuccessBordered,
    Info: () => theme.colors.colorTextButtonInfoBordered,
    Warning: () => theme.colors.colorTextButtonWarningBordered,
    Critical: () => theme.colors.colorTextButtonCriticalBordered,
  });

  const colorTextButtonHoverMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimaryHover,
    Secondary: () => theme.colors.colorTextButtonSecondaryHover,
    Success: () => theme.colors.colorTextButtonSuccessHover,
    Info: () => theme.colors.colorTextButtonInfoHover,
    Warning: () => theme.colors.colorTextButtonWarningHover,
    Critical: () => theme.colors.colorTextButtonCriticalHover,
  });

  const colorTextButtonBorderedHoverMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimaryBorderedHover,
    Secondary: () => theme.colors.colorTextButtonSecondaryBorderedHover,
    Success: () => theme.colors.colorTextButtonSuccessBorderedHover,
    Info: () => theme.colors.colorTextButtonInfoBorderedHover,
    Warning: () => theme.colors.colorTextButtonWarningBorderedHover,
    Critical: () => theme.colors.colorTextButtonCriticalBorderedHover,
  });

  const colorTextButtonActiveMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimaryActive,
    Secondary: () => theme.colors.colorTextButtonSecondaryActive,
    Success: () => theme.colors.colorTextButtonSuccessActive,
    Info: () => theme.colors.colorTextButtonInfoActive,
    Warning: () => theme.colors.colorTextButtonWarningActive,
    Critical: () => theme.colors.colorTextButtonCriticalActive,
  });

  const colorTextButtonBorderedActiveMapping = curry<string>({
    Primary: () => theme.colors.colorTextButtonPrimaryBorderedActive,
    Secondary: () => theme.colors.colorTextButtonSecondaryBorderedActive,
    Success: () => theme.colors.colorTextButtonSuccessBorderedActive,
    Info: () => theme.colors.colorTextButtonInfoBorderedActive,
    Warning: () => theme.colors.colorTextButtonWarningBorderedActive,
    Critical: () => theme.colors.colorTextButtonCriticalBorderedActive,
  });

  const borderColorButtonMapping = curry<string>({
    Primary: () => theme.colors.borderColorButtonPrimaryBordered,
    Secondary: () => theme.colors.borderColorButtonSecondaryBordered,
    Success: () => theme.colors.borderColorButtonSuccessBordered,
    Info: () => theme.colors.colorTextButtonInfoBordered,
    Warning: () => theme.colors.colorTextButtonWarningBordered,
    Critical: () => theme.colors.colorTextButtonCriticalBordered,
  });

  const borderColorButtonHoverMapping = curry<string>({
    Primary: () => theme.colors.borderColorButtonPrimaryBorderedHover,
    Secondary: () => theme.colors.borderColorButtonSecondaryBorderedHover,
    Success: () => theme.colors.borderColorButtonSuccessBorderedHover,
    Info: () => theme.colors.colorTextButtonInfoBorderedHover,
    Warning: () => theme.colors.colorTextButtonWarningBorderedHover,
    Critical: () => theme.colors.colorTextButtonCriticalBorderedHover,
  });

  const borderColorButtonActiveMapping = curry<string>({
    Primary: () => theme.colors.borderColorButtonPrimaryBorderedActive,
    Secondary: () => theme.colors.borderColorButtonSecondaryBorderedActive,
    Success: () => theme.colors.borderColorButtonSuccessBorderedActive,
    Info: () => theme.colors.colorTextButtonInfoBorderedActive,
    Warning: () => theme.colors.colorTextButtonWarningBorderedActive,
    Critical: () => theme.colors.colorTextButtonCriticalBorderedActive,
  });

  const borderColorButtonFocusMapping = curry<string>({
    Primary: () => convertHexToRgba(theme.palette.productNormal, 50),
    Secondary: () => convertHexToRgba(theme.palette.inkLight, 50),
    Success: () => convertHexToRgba(theme.palette.greenNormal, 50),
    Info: () => convertHexToRgba(theme.palette.blueNormal, 50),
    Warning: () => convertHexToRgba(theme.palette.orangeNormal, 50),
    Critical: () => convertHexToRgba(theme.palette.redNormal, 50),
  });

  const getToken = curry<Func<string>>({
    backgroundButton: () => backgroundButtonMappings,
    backgroundButtonHover: () => backgroundButtonHoverMappings,
    backgroundButtonActive: () => backgroundButtonActiveMappings,
    backgroundButtonFocus: () => backgroundButtonFocusMappings,
    backgroundButtonBordered: () => backgroundButtonBorderedMapping,
    backgroundButtonBorderedHover: () => backgroundButtonBorderedHoverMapping,
    backgroundButtonBorderedActive: () => backgroundButtonBorderedActiveMapping,
    colorTextButton: () => colorTextButtonMapping,
    colorTextButtonBordered: () => colorTextButtonBorderedMapping,
    colorTextButtonHover: () => colorTextButtonHoverMapping,
    colorTextButtonBorderedHover: () => colorTextButtonBorderedHoverMapping,
    colorTextButtonActive: () => colorTextButtonActiveMapping,
    colorTextButtonBorderedActive: () => colorTextButtonBorderedActiveMapping,
    borderColorButton: () => borderColorButtonMapping,
    borderColorButtonHover: () => borderColorButtonHoverMapping,
    borderColorButtonActive: () => borderColorButtonActiveMapping,
    borderColorButtonFocus: () => borderColorButtonFocusMapping,
  });

  return getToken(name)(type);
};

export default getColor;
