import { isNil } from '..';

describe('isNil', () => {
  test('returns true when the value is null or undefined', () => {
    expect(isNil(undefined)).toBeTruthy();
    expect(isNil(null)).toBeTruthy();
  });

  test('returns false when the value is not null', () => {
    expect(isNil({})).toBeFalsy();
  });
});
