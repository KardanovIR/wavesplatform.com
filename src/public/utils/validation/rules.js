import { validate as validateEmail } from 'email-validator';

// error codes
export const EMPTY = 'empty';
export const EMAIL_INVALID = 'emailInvalid';
export const NOT_CHECKED = 'notChecked';
// export const PHONE_INVALID = 'phoneInvalid';
// export const GMAIL_CORRECTION = 'gmailCorrection';

// rules
export const isEmpty = value => {
  return value.length ? '' : EMPTY;
};

export const isEmailInvalid = value => {
  return validateEmail(value) ? '' : EMAIL_INVALID;
};

export const isNotChecked = value => {
  return value === true ? '' : NOT_CHECKED;
};
// export const needsGmailCorrection = value => {
//     return ~value.indexOf('gmail.ru') ? GMAIL_CORRECTION : '';
// }

// export const isValidPhone = value => {
//     return value.replace(/[^\d]/gi, '').length > 9 ? '' : PHONE_INVALID;
// }
