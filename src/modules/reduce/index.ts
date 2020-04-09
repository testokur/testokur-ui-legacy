import { isUndefined } from '../../utils';

interface ConditionalDictionary<T> {
  [key: string]: () => T;
}

type DefaultCase<T> = (value: string) => T;

function reduce<T>(value: string, conditionals: ConditionalDictionary<T>, defaultCase?: DefaultCase<T>): T {
  if (isUndefined(value)) {
    return (undefined as unknown) as T;
  }

  const retVal = conditionals[value];
  if (!retVal) {
    if (defaultCase) {
      return defaultCase(value);
    }
    throw new Error(`Invalid conditional value "${value}"`);
  }
  return retVal();
}

function curry<T>(conditionals: ConditionalDictionary<T>, defaultCase?: DefaultCase<T>): (value: string) => T {
  return (value: string): T => reduce<T>(value, conditionals, defaultCase);
}

export { reduce, curry };
