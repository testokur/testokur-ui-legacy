import { curry } from 'testokur-utils';
import { Sizes, TestOkurTheme } from '../../modules';

const getFontSize = (size: Sizes, theme: TestOkurTheme): string => {
  const fontSizeButtonMapping = curry<string>({
    Small: () => theme.size.fontSizeButtonSmall,
    Medium: () => theme.size.fontSizeButtonMedium,
    Large: () => theme.size.fontSizeButtonLarge,
  });

  return fontSizeButtonMapping(size);
};

export default getFontSize;
