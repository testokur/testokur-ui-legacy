import { css, FlattenSimpleInterpolation } from 'styled-components';
import { TestOkurTheme, convertHexToRgba } from '../../modules';
import { ButtonStates, Tokens, Types } from './const';
import getColor from './getColor';

const getButtonBoxShadow = (
  state: ButtonStates,
  type: Types,
  bordered: boolean,
  disabled: boolean,
  theme: TestOkurTheme
): FlattenSimpleInterpolation | null => {
  if (disabled) {
    return null;
  }

  if (state === ButtonStates.Default && bordered) {
    return css`
      box-shadow: inset 0 0 0 1px ${getColor(Tokens.borderColorButton, type, theme)};
    `;
  }

  if (state === ButtonStates.Hover && bordered) {
    return css`
      box-shadow: inset 0 0 0 1px ${getColor(Tokens.borderColorButtonHover, type, theme)};
    `;
  }

  if (state === ButtonStates.Active) {
    if (bordered) {
      return css`
        box-shadow: inset 0 0 0 1px ${getColor(Tokens.borderColorButtonActive, type, theme)},
          inset 0 0 6px 3px ${convertHexToRgba(theme.palette.inkNormal, 15)};
      `;
    }
    return css`
      box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.palette.inkNormal, 15)};
    `;
  }

  if (state === ButtonStates.Focus) {
    return css`
      ${!bordered &&
      css`
        box-shadow: 0 0 0 3px ${getColor(Tokens.borderColorButtonFocus, type, theme)};
      `}
      &:active {
        ${bordered
    ? css`
              box-shadow: inset 0 0 0 1px ${getColor(Tokens.borderColorButtonActive, type, theme)},
                inset 0 0 6px 3px ${convertHexToRgba(theme.palette.inkNormal, 15)};
            `
    : css`
              box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.palette.inkNormal, 15)};
            `};
      }
    `;
  }

  return null;
};

export default getButtonBoxShadow;
