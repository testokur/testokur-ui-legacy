import { reduce, curry } from '..';

describe('reduce', () => {
  /* eslint-disable @typescript-eslint/explicit-function-return-type */
  const dictionary = {
    One: () => 1,
    Two: () => 2,
    Three: () => 3,
    Default: () => 0,
  };

  it('should reduce', () => {
    const reducedNumber = reduce('Three', dictionary);
    expect(reducedNumber).toBe(3);
  });

  it('should throw error when value does not exist in dictionary', () => {
    const action = () => reduce('Four', dictionary);
    expect(action).toThrow(RangeError);
  });

  it('should return provided default value when value does not exist', () => {
    const reducedNumber = reduce('Four', dictionary, 'Default');
    expect(reducedNumber).toBe(0);
  });
});

describe('curry', () => {
  it('should curry', () => {
    const numberCurry = curry<number>({
      One: () => 1,
      Two: () => 2,
      Three: () => 3,
    });

    expect(numberCurry('Three')).toBe(3);
  });
});
