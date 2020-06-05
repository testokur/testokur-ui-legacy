import { TestOkurTheme } from '../theme';

export enum Durations {
  Slow = 'Slow',
  Normal = 'Normal',
  Fast = 'Fast',
}

type Transition = (theme: TestOkurTheme) => string;

export const transition = (properties: string[], duration: Durations, timingFunction: string): Transition => (
  theme: TestOkurTheme
): string => {
  const tokens = {
    [Durations.Slow]: theme.duration.durationSlow,
    [Durations.Normal]: theme.duration.durationNormal,
    [Durations.Fast]: theme.duration.durationFast,
  };
  return properties.map(property => `${property} ${tokens[duration] || duration} ${timingFunction}`).join(',');
};
