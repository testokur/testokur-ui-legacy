import { Crypto } from '@peculiar/webcrypto';
import { buildRandomId } from '..';

describe('buildRandomId', () => {
  Object.defineProperty(window, 'crypto', {
    value: new Crypto(),
  });

  it('should generate randomid', () => {
    const generateId = buildRandomId('name');
    expect(generateId).toContain('name');
    expect(generateId).toContain('id');
  });
});
