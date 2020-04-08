import { TestOkurTheme } from '../../modules';

export const getColorForCustomValue = (theme: TestOkurTheme, disabled?: boolean, filled?: boolean): string => {
  if (disabled) {
    return theme.palette.inkLighter;
  }
  if (filled) {
    return theme.colors.colorTextInput;
  }

  return theme.colors.colorPlaceholderInput;
};

export const getColorForSelect = (theme: TestOkurTheme, filled?: boolean, customValueText?: string): string => {
  if (customValueText !== undefined) {
    return 'transparent !important';
  }
  return filled ? theme.colors.colorTextInput : theme.palette.inkLight;
};
