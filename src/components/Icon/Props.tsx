import { Testable } from '../../modules';
import { Sizes, Colors } from './styled';

type Props = Testable &
React.SVGAttributes<SVGElement> & {
  children: React.ReactNode;
  size: Sizes;
  color: Colors;
  ariaLabel: string;
  ariaHidden?: boolean;
};

export default Props;
