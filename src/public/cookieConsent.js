class CookieConsent {
  constructor({ essentialCookies = [], consentProp = '__cookieConsent' } = {}) {
    if (CookieConsent.__instance) {
      return CookieConsent.__instance;
    }

    let cookiesInterceptionEnabled = false;
    const _essentialCookies = new Set(essentialCookies);
    const _cookies = new Set();

    const originalCookie =
      Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
    if (!originalCookie) throw new Error('_cookies disabled');

    const proxyDescriptor = {
      get: function() {
        return originalCookie.get.call(document);
      },
      set: function(val) {
        if (typeof val !== 'string' || val === '') return;
        const cookieName = val.split('=')[0];

        return cookiesInterceptionEnabled && !_essentialCookies.has(cookieName)
          ? _cookies.add(val)
          : originalCookie.set.call(document, val);
      },
    };

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

    const clearCookies = () => {
      if (!document.cookie || document.cookie === '') return;
      const cookies = document.cookie.split('; ');
      cookies.map(x => x.split('=')[0]).forEach(name => {
        if (_essentialCookies.has(name)) {
          return;
        }
        deleteCookie(name);
      });
    };

    const eraseWithholdedCookies = () => _cookies.clear();

    const enableScript = node => {
      const html = node.innerHTML;
      const script = document.createElement('script');
      script.innerHTML = html;
      node.parentNode.replaceChild(script, node);
    };

    const enableScripts = () =>
      document.querySelectorAll('[data-cookie-managed]').forEach(enableScript);

    const processWithholdedCookies = () => {
      cookiesInterceptionEnabled = false;
      localStorage[consentProp] = true;
      _cookies.forEach(cookie => (document.cookie = cookie));
      enableScripts();
    };

    const isConsentHandled = () => localStorage.hasOwnProperty(consentProp);

    const isConsentGranted = () => localStorage[consentProp] === 'true';

    Object.defineProperties(this, {
      granted: {
        get: () => {
          return isConsentGranted();
        },
      },
      handled: {
        get: () => {
          return isConsentHandled();
        },
      },
    });

    this.enable = () => {
      if (originalCookie && originalCookie.configurable) {
        cookiesInterceptionEnabled = true;
        Object.defineProperty(document, 'cookie', proxyDescriptor);
      }
    };
    this.disable = () => {
      cookiesInterceptionEnabled = false;
      eraseWithholdedCookies();
      Object.defineProperty(document, 'cookie', originalCookie);
      enableScripts();
    };
    this.grantConsent = () => {
      localStorage[consentProp] = 'true';
      processWithholdedCookies();
      this.onGranted && this.onGranted();
    };
    this.withdrawConsent = () => {
      clearCookies();
      localStorage[consentProp] = 'false';
      this.onWithdrawn && this.onWithdrawn();
    };
    this.reset = () => {
      delete localStorage[consentProp];
      this.onReset && this.onReset();
    };

    CookieConsent.__instance = this;
    return this;
  }
}

window.CookieConsent = CookieConsent;
