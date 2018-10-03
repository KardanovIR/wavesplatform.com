import { curryN } from 'ramda';

export const applySelectorToStore = curryN(2, (selector, store) => ({
  ...store,
  getState: () => selector(store.getState()),
}));
