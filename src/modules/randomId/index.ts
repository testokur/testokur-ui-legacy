import { useMemo } from 'react';

export const buildRandomId = (name: string): string => {
  const array = new Uint32Array(2);
  window.crypto.getRandomValues(array);

  return `${name + Math.floor(array[0] * 100000)}-id-${Math.floor(array[1] * 100000)}`;
};

export const randomId = (name: string): string => useMemo(() => buildRandomId(name), []);
