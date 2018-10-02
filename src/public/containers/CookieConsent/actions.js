export const MOUNT = 'CookieConsent.Mount';
export const ALLOW_ALL = 'CookieConsent.AllowAll';
export const ESSENTIALS_ONLY = 'CookieConsent.EssentialsOnly';
export const RESET = 'CookieConsent.Reset';

const createAC = type => () => ({ type });

export const mount = createAC(MOUNT);
export const allowAll = createAC(ALLOW_ALL);
export const essentialsOnly = createAC(ESSENTIALS_ONLY);
export const reset = createAC(RESET);
