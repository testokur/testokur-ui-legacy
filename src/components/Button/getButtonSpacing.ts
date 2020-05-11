import { curry } from 'testokur-utils';
import { Sizes, TestOkurTheme, Func } from '../../modules';
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
    Medium: () => theme.spacing.paddingButtonNormal,
    Large: () => theme.spacing.paddingButtonLarge,
  });

  const paddingButtonWithIconsMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithIcons,
    Medium: () => theme.spacing.paddingButtonNormalWithIcons,
    Large: () => theme.spacing.paddingButtonLargeWithIcons,
  });

  const paddingButtonWithLeftIconMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithLeftIcon,
    Medium: () => theme.spacing.paddingButtonNormalWithLeftIcon,
    Large: () => theme.spacing.paddingButtonLargeWithLeftIcon,
  });

  const paddingButtonWithRightIconMapping = curry<string>({
    Small: () => theme.spacing.paddingButtonSmallWithRightIcon,
    Medium: () => theme.spacing.paddingButtonNormalWithRightIcon,
    Large: () => theme.spacing.paddingButtonLargeWithRightIcon,
  });

  const tokens = curry<Func<string>>({
    paddingButton: () => paddingButtonMapping,
    paddingButtonWithIcons: () => paddingButtonWithIconsMapping,
    paddingButtonWithLeftIcon: () => paddingButtonWithLeftIconMapping,
    paddingButtonWithRightIcon: () => paddingButtonWithRightIconMapping,
  });

  return tokens(type)(size);
};

export default getButtonSpacing;
