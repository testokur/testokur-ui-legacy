import { Sizes, TestOkurTheme } from '../../modules';

const getIconSpacing = (size: Sizes, onlyIcon: boolean, theme: TestOkurTheme): string => {
  if (onlyIcon) {
    return 'initial';
  }
  let margin = theme.spacing.marginButtonIconSmall;

  if (size === Sizes.Large) {
    margin = theme.spacing.marginButtonIconLarge;
  } else if (size === Sizes.Medium) {
    margin = theme.spacing.marginButtonIconNormal;
  }

  return `0 ${margin} 0 0`;
};

export default getIconSpacing;
