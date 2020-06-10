// import { css } from 'styled-components';

// type Props = {
//   readonly inline?: boolean;
// }

// const getViewportFlexStyles = (viewport: string) => (props: Props) => {
//   const { flex, theme } = props;
//   const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
//     viewport
//   ];

//   return css`
//     ${flex &&
//     css`
//       display: ${inline};
//       flex-direction: ${getDirection(direction)};
//       flex-wrap: ${getWrap(wrap)};
//       flex-grow: ${getGrow(grow)};
//       flex-shrink: ${getShrink(shrink)};
//       flex-basis: ${getBasis(basis)};
//       justify-content: ${getJustify(justify)};
//       align-content: ${getAlign(align)};
//       align-items: ${getAlign(align)};
//     `};
//     width: ${getWidth(inline)};
//     margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
//   `;
// };
// // const getDisplay: GetDisplay = inline => isDefined(inline) && (inline ? "inline-flex" : "flex");
// export default getViewportFlexStyles;
