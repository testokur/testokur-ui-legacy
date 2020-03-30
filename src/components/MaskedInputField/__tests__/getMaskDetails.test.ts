import getMaskDetails from '../getMaskDetails';
import { MaskingType } from '../component';

test('getMaskDetails should return mask details when valid type passed', () => {
  const [mask, format] = getMaskDetails(MaskingType.Phone);
  expect(mask).toBe('(___) ___-____');
  expect(format).toBe('(***) ***-****');
});
