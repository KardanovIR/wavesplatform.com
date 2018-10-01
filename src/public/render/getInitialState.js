import { pathEq } from 'ramda';

export default () => ({
  cookieConsentSnackbarOpen: pathEq(
    ['localStorage', 'cookieConsentGiven'],
    undefined,
    window
  ),
});
