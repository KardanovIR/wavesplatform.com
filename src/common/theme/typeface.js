const typeface = {
  '@font-face': [
    {
      fontFamily: 'suisse_intl',
      src: [
        `url(${require('./fonts/subset-SuisseIntl-Bold.woff2')}) format(\'woff2\')`,
        `url(${require('./fonts/subset-SuisseIntl-Bold.woff')}) format(\'woff\')`,
      ],
      fontWeight: 700,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'suisse_intl',
      src: [
        `url(${require('./fonts/suisseintl-semibold-webfont.woff2')}) format(\'woff2\')`,
        `url(${require('./fonts/suisseintl-semibold-webfont.woff')}) format(\'woff\')`,
      ],
      fontWeight: 600,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'suisse_intl',
      src: [
        `url(${require('./fonts/suisseintl-medium-webfont.woff2')}) format(\'woff2\')`,
        `url(${require('./fonts/suisseintl-medium-webfont.woff')}) format(\'woff\')`,
      ],
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'suisse_intl',
      src: [
        `url(${require('./fonts/suisseintl-regular-webfont.woff2')}) format(\'woff2\')`,
        `url(${require('./fonts/suisseintl-regular-webfont.woff')}) format(\'woff\')`,
      ],
      fontWeight: 400,
      fontStyle: 'normal',
    },
  ],
};

export default typeface;
