export const localStorageConsent = {
  set: v => (window.localStorage.consentGiven = v),
  get: () => {
    const v = parseInt(window.localStorage.consentGiven);
    if (isNaN(v)) return 0;
    else return v;
  },
};

const ESSENTIAL_COOKIES = { locale: true, __cfduid: true };
const deleteCookie = name => {
  // With location and precise domain
  document.cookie =
    name +
    '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; location=/; domain=' +
    document.domain;

  // With location and domain
  document.cookie =
    name +
    '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; location=/; domain=.' +
    document.domain;

  // With precise domain only (without path)
  document.cookie =
    name +
    '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.' +
    document.domain;

  // With domain only (without path)
  document.cookie =
    name +
    '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
    document.domain;

  // Without domain, without path
  document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
};

export const clearCookies = () => {
  if (!document.cookie || document.cookie === '') return;
  const cookies = document.cookie.split('; ');
  cookies.map(x => x.split('=')[0]).forEach(name => {
    if (ESSENTIAL_COOKIES[name]) {
      return;
    }
    deleteCookie(name);
  });
};

export const initTags = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'InitTags' });
};
