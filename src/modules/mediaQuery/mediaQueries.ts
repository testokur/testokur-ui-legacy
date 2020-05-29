import { css, Interpolation, DefaultTheme, ThemeProps, FlattenInterpolation } from 'styled-components';
import getBreakpointWidth from './getBreakPointWidth';
import Queries from './queries';
import Devices from './devices';

type QueryFunction = (style: Interpolation<unknown>) => FlattenInterpolation<ThemeProps<DefaultTheme>>;

const mediaQueries = Object.keys(Queries).reduce(
  (obj, name) => ({
    ...obj,
    [Queries[name as keyof typeof Queries]]: (style: Interpolation<unknown>): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
      return css`
        @media ${({ theme }): string => getBreakpointWidth(Queries[name as keyof typeof Queries], theme)} {
          ${style};
        }
      `;
    },
  }),
  {}
);

export default mediaQueries as { [key in Devices]: QueryFunction };
