import Queries from './queries';
import { TestOkurTheme } from '../theme';

const getBreakpointWidth = (query: Queries, theme: TestOkurTheme): string => {
  const tokens = {
    [Queries.MediumMobile]: theme.breakPoints.widthBreakpointMediumMobile,
    [Queries.Tablet]: theme.breakPoints.widthBreakpointTablet,
    [Queries.Desktop]: theme.breakPoints.widthBreakpointDesktop,
    [Queries.LargeDesktop]: theme.breakPoints.widthBreakpointLargeDesktop,
    [Queries.LargeMobile]: theme.breakPoints.widthBreakpointLargeMobile,
  };

  return `(min-width: ${tokens[query]}px)`;
};

export default getBreakpointWidth;
