import { reduce, curry } from '..';

describe('reduce', () => {
  it('should reduce', () => {
    const reducedNumber = reduce('Three', {
      One: () => 1,
      Two: () => 2,
      Three: () => 3,
    });
    expect(reducedNumber).toBe(3);
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
