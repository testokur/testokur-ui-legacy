import { isUndefined } from '../../utils';

interface ConditionalDictionary<T> {
  [key: string]: () => T;
}

function reduce<T>(value: string, conditionals: ConditionalDictionary<T>, defaultVal?: string): T {
  const retVal = conditionals[value];
  if (!retVal) {
    if (!isUndefined(defaultVal)) {
      return conditionals[defaultVal ?? '']();
    }
    throw new RangeError(`Invalid conditional value "${value}"`);
  }
  return retVal();
}

function curry<T>(conditionals: ConditionalDictionary<T>, defaultVal?: string): (value: string) => T {
  return (value: string): T => reduce<T>(value, conditionals, defaultVal);
}

export { reduce, curry };
