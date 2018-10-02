import React from 'react';

const script = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=Gopq5B1SAzYLShTywB5yHQ&gtm_preview=env-147&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KR7HQLF');
`;

const GtmHead = () => (
  <script
    // data-cookie-managed="true"
    dangerouslySetInnerHTML={{
      __html: script,
    }}
  />
);

export default GtmHead;
