import {
  compose,
  reject,
  map,
  find,
  isNil,
  juxt,
  mapObjIndexed,
  defaultTo,
} from 'ramda';

import { isNotEmpty } from 'src/common/utils/helpers';

const applyRulesIfExist = values => (val, key) =>
  juxt(defaultTo([], val))(values[key]);

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
    values => mapObjIndexed(applyRulesIfExist(values))(rules)
  );
