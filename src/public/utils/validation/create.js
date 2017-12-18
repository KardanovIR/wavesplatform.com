import {
  compose,
  reject,
  map,
  find,
  isNil,
  juxt,
  mapObjIndexed,
  propOr,
  forEach,
} from 'ramda';

import { isNotEmpty } from 'src/common/utils/helpers';

const applyRulesIfExist = rules => (val, key) =>
  juxt(propOr([], key, rules))(val);

/**
 *
 * @param {object} rules
 * object with
 * keys — form fields
 * values — array of rules applied to them
 *
 * Rules:
 * {
 *  username: [isEmpty],
 *  email: [isEmpty, isEmailInvalid]
 * }
 *
 * -->
 *
 * Values:
 * {
 *  username: 'qwe',
 *  email: 'qweqwe'
 * }
 *
 * -->
 *
 * Errors:
 * {
 *   email: 'EMAIL_INVALID'
 * }
 * // username is correct, not empty
 */

export default rules =>
  compose(
    reject(isNil),
    map(find(isNotEmpty)),
    mapObjIndexed(applyRulesIfExist(rules))
  );
