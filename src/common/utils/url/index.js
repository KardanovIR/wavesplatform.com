import { merge, compose, prop, __ } from 'ramda';

/**
 * @typedef urlObject
 * @type {Object}
 * @property {string} [protocol]
 * @property {string} [subdomain]
 * @property {string} [domain]
 * @property {string} pathname
 */

export const getServerName = () => {
  if (process.env.SERVER_NAME) {
    return process.env.SERVER_NAME;
  }
  if (typeof window !== 'undefined' && window.__SERVER_NAME) {
    return window.__SERVER_NAME;
  }
  return 'wavesplatform.com';
};

/** @type {Object.<string, urlObject>} */
const URL = {
  home: {
    pathname: '/',
  },
  product: {
    pathname: '/product',
  },
  developers: {
    pathname: '/developers',
  },
  company: {
    pathname: '/company',
  },
  'get-waves': {
    pathname: '/get-waves',
  },
  'waves-ng': {
    subdomain: 'waves-ng',
    pathname: '/',
  },
  mining: {
    pathname: '/mining',
  },
  leasing: {
    pathname: '/leasing',
  },
  'files.terms_conditions': {
    pathname: '/files/docs/Waves_terms_and_conditions.pdf',
  },
  'online-client': {
    pathname: 'https://beta.wavesplatform.com',
  },
  blog: {
    subdomain: 'blog',
    pathname: '/',
  }
};

export const createUrlFromObj = ({ protocol, domain, subdomain, pathname }) => {
  if (!pathname) {
    throw new Error('No pathname provided for url');
  }

  // absolute urls return as is
  if (/^https?/.test(pathname)) {
    return pathname;
  }

  return `${protocol}://${subdomain ? `${subdomain}.` : ''}${domain}${pathname}`;
};

const checkKey = urls => key => {
  if (!urls[key]) {
    throw new Error(`No '${key}' url exists`);
  }
  return key;
};

/**
 *
 * @param {Object.<string, urlObject>} urls
 * @returns {funtction(string)}
 */
const createGetUrl = urls => {
  /** @type {urlObject} */
  const defaults = {
    protocol: process.env.NODE_ENV === 'development' ? 'http' : 'https',
    domain: getServerName(),
  };

  return compose(createUrlFromObj, merge(defaults), prop(__, urls), checkKey(urls));
};

export default createGetUrl(URL);
