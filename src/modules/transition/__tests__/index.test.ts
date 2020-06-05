import { transition, Durations } from '..';
import { createTheme } from '../../theme';

describe('transition', () => {
  it('should return transitions for input properties', () => {
    const properties = ['background', 'box-shadow'];
    const theme = createTheme();
    const result = transition(properties, Durations.Fast, 'ease-in-out')(theme);
    expect(result).toContain(`${properties[0]} ${theme.duration.durationFast} ease-in-out`);
    expect(result).toContain(`${properties[1]} ${theme.duration.durationFast} ease-in-out`);
  });
});
