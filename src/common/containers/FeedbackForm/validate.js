import { isEmpty, isEmailInvalid } from 'src/public/utils/validation';
import createValidation from 'src/public/utils/validation/create';

import { has, find, flip } from 'ramda';

const rules = {
  email: [isEmpty, isEmailInvalid],
  message: [isEmpty],
  reason: [isEmpty],
};

const validation = createValidation(rules);
const errorPriority = ['email', 'reason', 'message'];

export default values => {
  const errors = validation(values);
  errors._error = find(flip(has)(errors), errorPriority);
  return errors;
};
