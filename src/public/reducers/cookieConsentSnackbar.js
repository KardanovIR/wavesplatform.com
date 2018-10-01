import {
  COOKIES_CONSENT_ALLOW,
  COOKIES_CONSENT_DISABLE,
  COOKIES_CONSENT_RESET,
} from 'src/public/actions';

export default (s = false, { type }) => {
  switch (type) {
    case COOKIES_CONSENT_RESET:
      return true;
    case COOKIES_CONSENT_ALLOW:
    case COOKIES_CONSENT_DISABLE:
      return false;
    default:
      return s;
  }
};
