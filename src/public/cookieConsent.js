window.CookieConsent = function CookieConsent({
  essentialCookies = [],
  consentProp = '__cookieConsent',
}) {
  if (CookieConsent.__instance) {
    return CookieConsent.__instance;
  }
  var cookiesInterceptionEnabled = false;
  var _essentialCookies = new Set(essentialCookies);

  var Cookies = new Set();
  var originalCookie =
    Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
    Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

  if (!originalCookie) throw new Error('Cookies disabled');
  const proxyDescriptor = {
    get: function() {
      return originalCookie.get.call(document);
    },
    set: function(val) {
      if (typeof val !== 'string' || val === '') return;
      const cookieName = val.split('=')[0];

      return cookiesInterceptionEnabled && !_essentialCookies.has(cookieName)
        ? Cookies.add(val)
        : originalCookie.set.call(document, val);
    },
  };
  function clearCookies() {
    if (!document.cookie || document.cookie === '') return;
    const cookies = document.cookie.split('; ');
    cookies.map(x => x.split('=')[0]).forEach(name => {
      if (_essentialCookies.has(name)) {
        return;
      }
      document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
    });
  }

  function eraseWithholdedCookies() {
    Cookies.clear();
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
    Cookies.forEach(cookie => (document.cookie = cookie));
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
  };

  this.withdrawConsent = function withdrawConsent() {
    clearCookies();
    localStorage[consentProp] = 'false';
  };
  this.reset = function reset() {
    return delete localStorage[consentProp];
  };
  CookieConsent.__instance = this;
  return this;
};
