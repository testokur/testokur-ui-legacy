import { Testable, Sizes, Colors } from '../../modules';

type Props = Testable &
React.SVGAttributes<SVGElement> & {
  children: React.ReactNode;
  size?: Sizes;
  color?: Colors;
  ariaLabel?: string;
  ariaHidden?: boolean;
  customColor?: string;
};

export default Props;
