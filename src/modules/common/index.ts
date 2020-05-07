import { TestOkurTheme } from '../theme';
import { curry } from '../reduce';

enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

type Func<T> = (value: string) => T;

const getSize = (theme: TestOkurTheme): Func<string> =>
  curry<string>(
    {
      Small: () => theme.size.iconSmall,
      Medium: () => theme.size.iconMedium,
      Large: () => theme.size.iconLarge,
      Default: () => theme.size.iconMedium,
    },
    'Default'
  );

enum Colors {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Critical = 'Critical',
}

const getColor = (theme: TestOkurTheme): Func<string> =>
  curry<string>(
    {
      Primary: () => theme.colors.colorIconPrimary,
      Critical: () => theme.colors.colorIconCritical,
      Info: () => theme.colors.colorIconInfo,
      Secondary: () => theme.colors.colorIconSecondary,
      Success: () => theme.colors.colorIconSuccess,
      Warning: () => theme.colors.colorIconWarning,
      Default: () => theme.colors.colorIconPrimary,
    },
    'Default'
  );

enum SpacingsAfter {
  None = 'None',
  Smallest = 'Smallest',
  Small = 'Small',
  Normal = 'Normal',
  Medium = 'Medium',
  Large = 'Large',
  Largest = 'Largest',
}

const getSpacing = (theme: TestOkurTheme): Func<string> =>
  curry<string>({
    None: () => '0',
    Smallest: () => theme.spacing.spaceXXSmall,
    Small: () => theme.spacing.spaceXSmall,
    Normal: () => theme.spacing.spaceSmall,
    Medium: () => theme.spacing.spaceMedium,
    Large: () => theme.spacing.spaceLarge,
    Largest: () => theme.spacing.spaceXLarge,
  });

export { Sizes, getSize, Colors, getColor, SpacingsAfter, getSpacing, Func };
