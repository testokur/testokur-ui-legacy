// import { css } from 'styled-components';

// export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
// export type Align = "start" | "end" | "center" | "stretch";
// export type Justify = "start" | "end" | "center" | "between" | "around";
// export type Spacing =
//   | "none"
//   | "extraTight"
//   | "tight"
//   | "condensed"
//   | "compact"
//   | "natural"
//   | "comfy"
//   | "loose"
//   | "extraLoose";

// type MediaQueryProps = {
//   readonly inline?: boolean;
//   readonly direction?: Direction;
//   readonly wrap?: boolean;
//   readonly grow?: boolean;
//   readonly shrink?: boolean;
//   readonly basis?: string;
//   readonly align?: Align;
//   readonly justify?: Justify;
//   readonly spacing?: Spacing;
// }

// type Props = {
//   readonly [mediaQuery: string]: MediaQueryProps;
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

// export default getViewportFlexStyles;
