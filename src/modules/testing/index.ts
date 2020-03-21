import { useCallback } from 'react';

const buildTestId = (root?: string, id?: string): string | undefined => {
  if (!root) return undefined;
  if (!id) return root;
  return `${root}-${id}`;
};

export const useBuildTestId = (rootTestId?: string) => useCallback((id?: string) => buildTestId(rootTestId, id), [rootTestId]);

export type Testable = { 'data-testid'?: string };
