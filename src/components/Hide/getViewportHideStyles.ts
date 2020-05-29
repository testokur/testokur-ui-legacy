import { css, DefaultTheme, ThemeProps, FlattenInterpolation } from 'styled-components';
import { Devices, mediaQueries } from '../../modules';

const getViewportHideStyles: (on: Devices[], block?: boolean | undefined) => FlattenInterpolation<ThemeProps<DefaultTheme>>[] = (
  on: Devices[],
  block?: boolean
) => {
  const getBlockStyle: () => string = () => (block ? 'block' : 'inline-block');

  const mapFunc: (viewport: string) => FlattenInterpolation<ThemeProps<DefaultTheme>> = (viewport: string) => {
    if (viewport in mediaQueries) {
      return css`
        ${mediaQueries[viewport as keyof typeof mediaQueries](css``)};
        display: ${on.indexOf(viewport as Devices) !== -1 ? 'none' : getBlockStyle()};
      `;
    }
    if (viewport === 'smallMobile' && on.indexOf(viewport as Devices) !== -1) {
      return css`
        display: none;
      `;
    }
    return css``;
  };

  return Object.keys(Devices).map(mapFunc);
};

export default getViewportHideStyles;
