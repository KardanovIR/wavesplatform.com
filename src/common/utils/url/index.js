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
  'online-client(beta)': {
    subdomain: 'beta',
    pathname: '/',
  },
  'online-client': {
    pathname: 'https://waveswallet.io',
  },
  blog: {
    subdomain: 'blog',
    pathname: '/',
  },
  file: {
    pathname: '/files/',
  },
  'smart-contracts': {
    pathname: '/developers/smart-contracts',
  },
  'dex-demo': {
    pathname: 'https://beta.wavesplatform.com/dex-demo',
  },
};

export const FILES = {
  terms_conditions: 'docs/Waves_terms_and_conditions.pdf',
  privacy_policy: 'docs/Waves_privacy_policy.pdf',
  cookies_policy: 'docs/Waves_сookies_policy.pdf',
};

export const createUrlFromObj = ({ protocol, domain, subdomain, pathname }) => {
  if (!pathname) {
    throw new Error('No pathname provided for url');
  }

  // absolute urls return as is
  if (/^https?/.test(pathname)) {
    return pathname;
  }

  return `${protocol}://${
    subdomain ? `${subdomain}.` : ''
  }${domain}${pathname}`;
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
const url = (urls => {
  /** @type {urlObject} */
  const defaults = {
    protocol: process.env.NODE_ENV === 'development' ? 'http' : 'https',
    domain: getServerName(),
  };

  return compose(
    createUrlFromObj,
    merge(defaults),
    prop(__, urls),
    checkKey(urls)
  );
})(URL);

/**
 * @param {string} filePath
 * @returns {string}
 */
export const fileUrl = filePath =>
  (process.env.NODE_ENV === 'development'
    ? 'https://s3.ca-central-1.amazonaws.com/wavesdb.com/'
    : url('file')) + filePath;

export default url;
