import { Testable } from '../..';
import { StyledButtonProps } from './styled';

type Props = Testable &
StyledButtonProps &
React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  ariaExpanded?: boolean;
  ariaControls?: string;
};


export default Props;