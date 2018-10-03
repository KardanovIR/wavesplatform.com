import { curryN } from 'ramda';
import { applySelectorToStore } from 'src/common/utils/state/applySelectorToStore';

export const patchEpicStore = curryN(
  2,
  (selector, epic) => (action$, store, ...rest) =>
    epic(action$, applySelectorToStore(selector, store), ...rest)
);
