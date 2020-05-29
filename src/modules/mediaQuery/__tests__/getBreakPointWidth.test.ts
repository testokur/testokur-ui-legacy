import getBreakpointWidth from '../getBreakPointWidth';
import Queries from '../queries';
import { createTheme } from '../..';

describe('getBreakPointWidth', () => {
  it('should return min-width for the device', () => {
    const theme = createTheme();
    expect(getBreakpointWidth(Queries.Tablet, theme)).toBe(`(min-width: ${theme.breakPoints.widthBreakpointTablet}px)`);
    expect(getBreakpointWidth(Queries.Desktop, theme)).toBe(`(min-width: ${theme.breakPoints.widthBreakpointDesktop}px)`);
    expect(getBreakpointWidth(Queries.MediumMobile, theme)).toBe(`(min-width: ${theme.breakPoints.widthBreakpointMediumMobile}px)`);
    expect(getBreakpointWidth(Queries.LargeMobile, theme)).toBe(`(min-width: ${theme.breakPoints.widthBreakpointLargeMobile}px)`);
  });
});
