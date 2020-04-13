import { Sizes, TestOkurTheme } from '../../modules';
import { isUndefined } from '../../utils';
import getSizeToken from './getSizeToken';
import { Tokens } from './const';

const getWidth = (size: Sizes, theme: TestOkurTheme, fullWidth?: boolean, width?: string, onlyIcon?: boolean): string => {
  if (fullWidth) {
    return '100%';
  }
  if (!isUndefined(width)) {
    return `${width}px`;
  }

  if (onlyIcon) {
    return getSizeToken(Tokens.heightButton, size, theme);
  }

  return 'auto';
};

export default getWidth;
