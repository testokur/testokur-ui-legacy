enum Types {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Critical = 'Critical',
}

const Tokens = {
  // Size tokens
  heightButton: 'heightButton',
  loadingWidth: 'loadingWidth',
  loadingHeight: 'loadingHeight',
  fontSizeButton: 'fontSizeButton',
  paddingButton: 'paddingButton',
  paddingButtonWithIcons: 'paddingButtonWithIcons',
  paddingButtonWithLeftIcon: 'paddingButtonWithLeftIcon',
  paddingButtonWithRightIcon: 'paddingButtonWithRightIcon',
  marginRightIcon: 'marginRightIcon',
  // Type tokens
  backgroundButton: 'backgroundButton',
  backgroundButtonHover: 'backgroundButtonHover',
  backgroundButtonActive: 'backgroundButtonActive',
  backgroundButtonFocus: 'backgroundButtonFocus',
  backgroundButtonBordered: 'backgroundButtonBordered',
  backgroundButtonBorderedHover: 'backgroundButtonBorderedHover',
  backgroundButtonBorderedActive: 'backgroundButtonBorderedActive',
  colorTextButton: 'colorTextButton',
  colorTextButtonBordered: 'colorTextButtonBordered',
  colorTextButtonHover: 'colorTextButtonHover',
  colorTextButtonBorderedHover: 'colorTextButtonBorderedHover',
  colorTextButtonActive: 'colorTextButtonActive',
  colorTextButtonBorderedActive: 'colorTextButtonBorderedActive',
  borderColorButton: 'borderColorButton',
  borderColorButtonHover: 'borderColorButtonHover',
  borderColorButtonActive: 'borderColorButtonActive',
  borderColorButtonFocus: 'borderColorButtonFocus',
};

enum ButtonStates {
  Default,
  Hover,
  Active,
  Focus,
}

export { ButtonStates, Tokens, Types };
