import convertHexToRgba from '..';

describe('convert hex to rgba', () => {
  it('should convert', () => {
    expect(convertHexToRgba('#28A138', 27)).toBe('rgba(40, 161, 56, 0.27)');
  });
});
