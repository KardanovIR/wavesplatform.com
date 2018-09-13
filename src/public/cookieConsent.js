window.CookieConsent = function CookieConsent({
  essentialCookies = [],
  consentProp = '__cookieConsent',
}) {
  if (CookieConsent.__instance) {
    return CookieConsent.__instance;
  }
  var cookiesInterceptionEnabled = false;
  var _essentialCookies = new Set(essentialCookies);
  var _cookies = new Set();
  var originalCookie =
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

  function deleteCookie(name) {
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
  }

  function clearCookies() {
    if (!document.cookie || document.cookie === '') return;
    const cookies = document.cookie.split('; ');
    cookies.map(x => x.split('=')[0]).forEach(name => {
      if (_essentialCookies.has(name)) {
        return;
      }
      deleteCookie(name);
    });
  }

  function eraseWithholdedCookies() {
    _cookies.clear();
  }

  function enableScript(node) {
    const html = node.innerHTML;
    const script = document.createElement('script');
    script.innerHTML = html;
    node.parentNode.replaceChild(script, node);
  }

  function enableScripts() {
    document.querySelectorAll('[data-cookie-managed]').forEach(enableScript);
  }

  function processWithholdedCookies() {
    cookiesInterceptionEnabled = false;
    localStorage[consentProp] = true;
    _cookies.forEach(cookie => (document.cookie = cookie));
    enableScripts();
  }

  function isConsentHandled() {
    return localStorage.hasOwnProperty(consentProp);
  }

  function isConsentGranted() {
    return localStorage[consentProp] === 'true';
  }

  this.enable = function enableCookiesWithhold() {
    if (originalCookie && originalCookie.configurable) {
      cookiesInterceptionEnabled = true;
      Object.defineProperty(document, 'cookie', proxyDescriptor);
    }
  };
  this.disable = function disableCookiesWithhold() {
    cookiesInterceptionEnabled = false;
    eraseWithholdedCookies();
    Object.defineProperty(document, 'cookie', originalCookie);
    enableScripts();
  };

  Object.defineProperties(this, {
    granted: {
      get() {
        return isConsentGranted();
      },
    },
    handled: {
      get() {
        return isConsentHandled();
      },
    },
  });

  this.grantConsent = function grantConsent() {
    localStorage[consentProp] = 'true';
    processWithholdedCookies();
    this.onGranted && this.onGranted();
  };
  this.withdrawConsent = function withdrawConsent() {
    clearCookies();
    localStorage[consentProp] = 'false';
    this.onWithdrawn && this.onWithdrawn();
  };
  this.reset = function reset() {
    delete localStorage[consentProp];
    this.onReset && this.onReset();
  };
  CookieConsent.__instance = this;
  return this;
};
