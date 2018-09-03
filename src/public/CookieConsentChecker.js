export default function() {
  window.CookieConsentChecker = (function() {
    var CONSENT_PROP = '__cookieConsent';
    var essentialCookies = new Set(['locale', '__cfduid']);

    var Cookies = new Set();
    var cookiesInterceptionEnabled = false;
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

        return cookiesInterceptionEnabled && !essentialCookies.has(cookieName)
          ? Cookies.add(val)
          : originalCookie.set.call(document, val);
      },
    };
    function clearCookies() {
      if (!document.cookie || document.cookie === '') return;
      const cookies = document.cookie.split('; ');
      cookies.map(x => x.split('=')[0]).forEach(name => {
        if (essentialCookies.has(name)) {
          return;
        }
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
      });
    }

    function enableCookiesWithhold() {
      if (originalCookie && originalCookie.configurable) {
        cookiesInterceptionEnabled = true;
        Object.defineProperty(document, 'cookie', proxyDescriptor);
      }
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
      localStorage[CONSENT_PROP] = true;
      Cookies.forEach(cookie => (document.cookie = cookie));
      enableScripts();
    }

    function disableCookiesWithhold() {
      cookiesInterceptionEnabled = false;
      eraseWithholdedCookies();
      Object.defineProperty(document, 'cookie', originalCookie);
      enableScripts();
    }
    function isConsentHandled() {
      return localStorage.hasOwnProperty(CONSENT_PROP);
    }
    function reset() {
      return delete localStorage[CONSENT_PROP];
    }
    function isConsentGranted() {
      return localStorage[CONSENT_PROP] === 'true';
    }
    function grantConsent() {
      localStorage[CONSENT_PROP] = 'true';
      processWithholdedCookies();
    }
    function withdrawConsent() {
      clearCookies();
      localStorage[CONSENT_PROP] = 'false';
    }
    return {
      enable: enableCookiesWithhold,
      cookies: Cookies,
      disable: disableCookiesWithhold,
      get granted() {
        return isConsentGranted();
      },
      get handled() {
        return isConsentHandled();
      },

      grantConsent: grantConsent,
      withdrawConsent: withdrawConsent,
      reset,
    };
  })();

  if (!window.CookieConsentChecker.granted) {
    window.CookieConsentChecker.enable();
  }
}
