import { css, FlattenSimpleInterpolation } from 'styled-components';
import getButtonBoxShadow from './getButtonBoxShadow';
import { ButtonStates, Types, Tokens } from './const';
import { TestOkurTheme } from '../../modules';
import getColor from './getColor';

const getFocus = (type: Types, bordered: boolean, disabled: boolean, theme: TestOkurTheme): FlattenSimpleInterpolation => {
  return css`
    :focus,
    :-moz-focusring,
    :focus-visible {
      ${getButtonBoxShadow(ButtonStates.Focus, type, bordered, disabled, theme)};
      background: ${bordered ? getColor(Tokens.backgroundButtonFocus, type, theme) : 'initial'};
    }

    :focus:not(:focus-visible) {
      box-shadow: none;
      background: ${bordered ? getColor(Tokens.backgroundButtonBordered, type, theme) : getColor(Tokens.backgroundButton, type, theme)};
    }
  `;
};

export default getFocus;
