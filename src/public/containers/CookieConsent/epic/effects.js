export const localStorageConsent = {
  set: v => (window.localStorage.consentGiven = v),
  get: () => {
    const v = parseInt(window.localStorage.consentGiven);
    if (isNaN(v)) return 0;
    else return v;
  },
};

export const initTags = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'InitTags' });
};
