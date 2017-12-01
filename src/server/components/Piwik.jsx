import React from 'react';

const Piwik = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `var _paq = _paq || [];
          /* recognize subdomains */
					_paq.push(['setDocumentTitle', document.domain + "/" + document.title]);
          _paq.push(['setCookieDomain', '*.wavesplatform.com']);
					_paq.push(['setDomains', '*.wavesplatform.com']);

          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
          var u="//wavesplatform.innocraft.cloud/";
            _paq.push(['setTrackerUrl', u+'piwik.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
          })();`,
    }}
  />
);

export default Piwik;
