import { isUndefined } from '..';

describe('isUndefined', () => {
  test('returns true when the value is undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  test('returns false when the value is not undefined', () => {
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
  });
});
