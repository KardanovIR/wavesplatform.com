import { combineMobileDesktopStyles } from './utils/combineMobileDesktopStyles';

export const global = {
  fontFamily: 'suisse_intl, Helvetica Neue, arial, sans-serif',
  fontSize: 17,
  fontStyle: 'normal',
  lineHeight: 1.35,
  fontVariantLigatures: 'none',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  'text-rendering': 'optimizeLegibility',
};

const creatyTypography = (palette, breakpoints) => {
  const base = {
    ...global,
    color: palette.gray[1000],
    hyphens: 'manual',
  };

  const display = {
    fontWeight: 500,
    color: palette.gray[1000],
  };

  return {
    display5: {
      ...base,
      ...display,
      fontSize: 38,
      lineHeight: 1.2,
      fontWeight: 500,
      margin: 0,

      [breakpoints.up('md')]: {
        fontSize: 80,
      },
    },
    display4: {
      ...base,
      ...display,
      fontSize: 28,
      lineHeight: 1,
      fontWeight: 700,
      margin: 0,

      [breakpoints.up('md')]: {
        fontSize: 44,
      },

      [breakpoints.up('lg')]: {
        fontSize: 64,
      },
    },
    display3: combineMobileDesktopStyles(
      {
        ...base,
        ...display,
        fontSize: 30,
        lineHeight: 1.4,
        margin: 0,
      },
      {
        fontSize: 44,
        lineHeight: 1.25,
      }
    ),
    display3Inverted: {
      extend: 'display3',
      ...combineMobileDesktopStyles(
        {
          fontSize: 50,
          lineHeight: 1.1,
        },
        {
          fontSize: 44,
          lineHeight: 1.22,
        }
      ),
    },
    display2: combineMobileDesktopStyles(
      {
        ...base,
        ...display,
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1.42,
        margin: 0,
      },
      {
        fontSize: 34,
        lineHeight: 1.29,
      }
    ),
    display1: combineMobileDesktopStyles(
      {
        ...base,
        ...display,
        fontSize: 16,
        lineHeight: 1.2,
        margin: 0,
      },
      {
        fontSize: 19,
      }
    ),
    displayCustom: combineMobileDesktopStyles(
      {
        ...base,
        ...display,
        fontSize: 40,
        lineHeight: 1.2,
        margin: 0,
      },
      {
        fontSize: 60,
        lineHeight: 1.12,
      }
    ),
    body: combineMobileDesktopStyles(base, {
      fontSize: 17,
      lineHeight: 1.6,
      margin: 0,
    }),
    body2: combineMobileDesktopStyles(
      {
        ...base,
        fontSize: 26,
        lineHeight: 1.25,
        fontWeight: 500,
        margin: 0,
      },
      {
        fontSize: 32,
        fontWeight: 400,
      }
    ),
    quote: combineMobileDesktopStyles(
      {
        ...base,
        fontStyle: 'normal',
        color: palette.gray[1000],
        margin: 0,
      },
      {
        fontSize: 17,
        lineHeight: 1.59,
      }
    ),
    button: combineMobileDesktopStyles(
      {
        ...global,
        margin: 0,
        fontWeight: 600,
        fontSize: 13,
        lineHeight: 1,
      },
      {
        fontSize: 15,
      }
    ),
    numeral: combineMobileDesktopStyles(
      {
        fontSize: 20,
        lineHeight: 1,
        fontStyle: 'normal',
        fontWeight: 700,
        margin: 0,
      },
      {
        fontSize: 30,
      }
    ),
    muted: combineMobileDesktopStyles({
      fontSize: 17,
      margin: 0,
    }),
  };
};

export { creatyTypography };
export default creatyTypography;
