import { Types } from './const';
import { curry, TestOkurTheme, Func } from '../../modules';

const getHeadingToken = (name: string, theme: TestOkurTheme, type: Types): string | number => {
  const weightHeadingMapping = curry<number>({
    PageTitle: () => theme.font.fontWeightHeadingDisplay,
    PageSubtitle: () => theme.font.fontWeightHeadingDisplaySubtitle,
    Title1: () => theme.font.fontWeightHeadingTitle1,
    Title2: () => theme.font.fontWeightHeadingTitle2,
    Title3: () => theme.font.fontWeightHeadingTitle3,
    Title4: () => theme.font.fontWeightHeadingTitle4,
    Title5: () => theme.font.fontWeightHeadingTitle5,
  });

  const sizeHeadingMapping = curry<number>({
    PageTitle: () => theme.font.fontWeightHeadingDisplay,
    PageSubtitle: () => theme.font.fontWeightHeadingDisplaySubtitle,
    Title1: () => theme.font.fontWeightHeadingTitle1,
    Title2: () => theme.font.fontWeightHeadingTitle2,
    Title3: () => theme.font.fontWeightHeadingTitle3,
    Title4: () => theme.font.fontWeightHeadingTitle4,
    Title5: () => theme.font.fontWeightHeadingTitle5,
  });

  const lineHeightMapping = curry<string>({
    PageTitle: () => theme.lineHeight.lineHeightHeadingDisplay,
    PageSubtitle: () => theme.lineHeight.lineHeightHeadingDisplaySubtitle,
    Title1: () => theme.lineHeight.lineHeightHeadingTitle1,
    Title2: () => theme.lineHeight.lineHeightHeadingTitle2,
    Title3: () => theme.lineHeight.lineHeightHeadingTitle3,
    Title4: () => theme.lineHeight.lineHeightHeadingTitle4,
    Title5: () => theme.lineHeight.lineHeightHeadingTitle5,
  });

  const mappings = curry<Func<string | number>>({
    WeightHeading: () => weightHeadingMapping,
    SizeHeading: () => sizeHeadingMapping,
    LineHeight: () => lineHeightMapping,
  });

  return mappings(name)(type);
};

export default getHeadingToken;
