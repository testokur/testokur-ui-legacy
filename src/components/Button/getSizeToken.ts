import { TestOkurTheme, Sizes, curry, StringMappingLambda } from '../../modules';

const getSizeToken = (name: string, size: Sizes, theme: TestOkurTheme): string => {
  const heightButtonMapping = curry<string>({
    Small: () => theme.size.heightButtonSmall,
    Medium: () => theme.size.heightButtonNormal,
    Large: () => theme.size.heightButtonLarge,
  });

  const loadingWidthMapping = curry<string>({
    Small: () => theme.size.widthIconSmall,
    Medium: () => theme.size.widthIconNormal,
    Large: () => theme.size.widthIconNormal,
  });

  const loadingHeightMapping = curry<string>({
    Small: () => theme.size.heightIconSmall,
    Medium: () => theme.size.heightIconMedium,
    Large: () => theme.size.heightIconLarge,
  });

  const fontSizeButtonMapping = curry<string>({
    Small: () => theme.size.fontSizeButtonSmall,
    Medium: () => theme.size.fontSizeButtonMedium,
    Large: () => theme.size.fontSizeButtonLarge,
  });

  const tokens = curry<StringMappingLambda>({
    heightButton: () => heightButtonMapping,
    loadingWidth: () => loadingWidthMapping,
    loadingHeight: () => loadingHeightMapping,
    fontSizeButton: () => fontSizeButtonMapping,
  });

  return tokens(name)(size);
};

export default getSizeToken;
