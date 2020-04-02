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

export { Sizes, getSize, Colors, getColor };
