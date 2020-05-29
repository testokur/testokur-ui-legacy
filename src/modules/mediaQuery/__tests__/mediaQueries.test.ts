import mediaQueries from '../mediaQueries';
import { Queries } from '..';

describe('mediaQueries', () => {
  it('should media queries', () => {
    Object.keys(Queries).map(q => expect(mediaQueries).toHaveProperty(Queries[q as keyof typeof Queries]));
  });
});
