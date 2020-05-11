import { getSpacing, SpacingsAfter, getColor, Colors, Sizes, getSize } from '..';
import { createTheme } from '../../theme';

const isArrayUnique = (arr: string[]): boolean => new Set(arr).size === arr.length;
const theme = createTheme({});

describe('getSpacing', () => {
  it('should return spacing', () => {
    const spacings: string[] = [];
    Object.keys(SpacingsAfter).forEach(x => spacings.push(getSpacing(theme)(x)));
    expect(isArrayUnique(spacings)).toBeTruthy();
    expect(spacings).toHaveLength(Object.keys(SpacingsAfter).length);
  });
});

describe('getColor', () => {
  it('should return colors', () => {
    const colors: string[] = [];
    Object.keys(Colors).forEach(x => colors.push(getColor(theme)(x)));
    expect(isArrayUnique(colors)).toBeTruthy();
    expect(colors).toHaveLength(Object.keys(Colors).length);
  });
});

describe('getSize', () => {
  it('should return sizes', () => {
    const sizes: string[] = [];
    Object.keys(Sizes).forEach(x => sizes.push(getSize(theme)(x)));
    expect(isArrayUnique(sizes)).toBeTruthy();
    expect(sizes).toHaveLength(Object.keys(Sizes).length);
  });
});
