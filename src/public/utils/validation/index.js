export * from './rules';

// rule creator
export const combineRules = rules => value =>
  rules.map(rule => rule(value)).filter(code => !!code);
