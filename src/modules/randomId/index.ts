import { useMemo } from 'react';

const buildRandomId = (name: string): string => `${name + Math.floor(Math.random() * 100000)}-id-${Math.floor(Math.random() * 100000)}`;

const randomId = (name: string): string => useMemo(() => buildRandomId(name), []);

export default randomId;
