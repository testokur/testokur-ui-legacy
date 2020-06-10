import { Testable, SpacingsAfter } from '../../modules';

/* TODO: Use Enums Instead? */
export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type Align = 'start' | 'end' | 'center' | 'stretch';
export type Justify = 'start' | 'end' | 'center' | 'between' | 'around';
export type Spacing = 'none' | 'extraTight' | 'tight' | 'condensed' | 'compact' | 'natural' | 'comfy' | 'loose' | 'extraLoose';

export type MediaQueryProps = {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: string;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
};
export type Props = Testable & {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly flex?: boolean;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: string;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
  readonly mediumMobile?: MediaQueryProps;
  readonly largeMobile?: MediaQueryProps;
  readonly tablet?: MediaQueryProps;
  readonly desktop?: MediaQueryProps;
  readonly largeDesktop?: MediaQueryProps;
  readonly spacingAfter?: SpacingsAfter;
  readonly children: React.ReactNode;
};
