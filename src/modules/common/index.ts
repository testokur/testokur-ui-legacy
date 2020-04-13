import { TestOkurTheme } from '../theme';
import { curry } from '../reduce';

enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

type StringMappingLambda = (value: string) => string;

const getSize = (theme: TestOkurTheme): StringMappingLambda =>
  curry<string>({
    Small: () => theme.size.iconSmall,
    Medium: () => theme.size.iconMedium,
    Large: () => theme.size.iconLarge,
  });

enum Colors {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Critical = 'Critical',
}

const getColor = (theme: TestOkurTheme): StringMappingLambda =>
  curry<string>({
    Primary: () => theme.colors.colorIconPrimary,
    Critical: () => theme.colors.colorIconCritical,
    Info: () => theme.colors.colorIconInfo,
    Secondary: () => theme.colors.colorIconSecondary,
    Success: () => theme.colors.colorIconSuccess,
    Warning: () => theme.colors.colorIconWarning,
  });

enum SpacingsAfter {
  None = 'None',
  Smallest = 'Smallest',
  Small = 'Small',
  Normal = 'Normal',
  Medium = 'Medium',
  Large = 'Large',
  Largest = 'Largest',
}

const getSpacing = (theme: TestOkurTheme): StringMappingLambda =>
  curry<string>({
    None: () => '0',
    Smallest: () => theme.spacing.spaceXXSmall,
    Small: () => theme.spacing.spaceXSmall,
    Normal: () => theme.spacing.spaceSmall,
    Medium: () => theme.spacing.spaceMedium,
    Large: () => theme.spacing.spaceLarge,
    Largest: () => theme.spacing.spaceXLarge,
  });

export { Sizes, getSize, Colors, getColor, SpacingsAfter, getSpacing, StringMappingLambda };
