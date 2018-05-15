import { curryN, map, identity, ifElse } from 'ramda';

export const mapWhen = curryN(2, (predicate, mapper) =>
  map(ifElse(predicate, mapper, identity))
);
