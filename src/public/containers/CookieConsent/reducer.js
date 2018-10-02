import { ALLOW_ALL, ESSENTIALS_ONLY, RESET } from './actions';
import { COOKIES_CONSENT_RESET } from 'src/public/actions';

export const initialState = {
  open: false,
};

export default (s = initialState, { type }) => {
  switch (type) {
    case RESET:
    case COOKIES_CONSENT_RESET:
      return {
        open: true,
      };
    case ALLOW_ALL:
    case ESSENTIALS_ONLY:
      return {
        open: false,
      };
    default:
      return s;
  }
};
