import { Sizes, TestOkurTheme, curry, StringMappingLambda } from '../../modules';
import { Tokens } from './const';

const getButtonSpacing = (theme: TestOkurTheme, onlyIcon: boolean, hasIconRight: boolean, hasIconLeft: boolean, size: Sizes): string => {
  if (onlyIcon) {
    return theme.spacing.paddingButtonWithoutText;
  }

  let type = Tokens.paddingButton;

  if (hasIconLeft && hasIconRight) {
    type = Tokens.paddingButtonWithIcons;
  }
  if (hasIconLeft && !hasIconRight) {
    type = Tokens.paddingButtonWithLeftIcon;
  }
  if (!hasIconLeft && hasIconRight) {
    type = Tokens.paddingButtonWithRightIcon;
  }

  const paddingButtonMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmall,
    Normal: () => theme.spacing.paddingButtonNormal,
    Large: () => theme.spacing.paddingButtonLarge,
  });

  const paddingButtonWithIconsMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithIcons,
    Normal: () => theme.spacing.paddingButtonNormalWithIcons,
    Large: () => theme.spacing.paddingButtonLargeWithIcons,
  });

  const paddingButtonWithLeftIconMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithLeftIcon,
    Normal: () => theme.spacing.paddingButtonNormalWithLeftIcon,
    Large: () => theme.spacing.paddingButtonLargeWithLeftIcon,
  });

  const paddingButtonWithRightIconMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithRightIcon,
    Normal: () => theme.spacing.paddingButtonNormalWithRightIcon,
    Large: () => theme.spacing.paddingButtonLargeWithRightIcon,
  });

  const tokens = curry<StringMappingLambda>({
    paddingButton: () => paddingButtonMapping,
    paddingButtonWithIcons: () => paddingButtonWithIconsMapping,
    paddingButtonWithLeftIcon: () => paddingButtonWithLeftIconMapping,
    paddingButtonWithRightIcon: () => paddingButtonWithRightIconMapping,
  });

  return tokens(type)(size);
};

export default getButtonSpacing;
