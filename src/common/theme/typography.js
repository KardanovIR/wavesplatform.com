import { combineMobileDesktopStyles } from './utils/combineMobileDesktopStyles';

export const global = {
  fontFamily: 'suisse_intl, Helvetica Neue, arial, sans-serif',
  fontSize: 15,
  fontStyle: 'normal',
  lineHeight: 1.67,
  margin: 0,
  fontVariantLigatures: 'none',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  'text-rendering': 'optimizeLegibility',
};

const creatyTypography = (palette, breakpoints, colors) => {
  const base = {
    ...global,
    color: palette.gray[800],
  };

  const display = {
    fontWeight: 500,
    color: colors.black.default,
  };

  return {
    display4: {
      ...base,
      ...display,
      fontSize: 28,
      lineHeight: 1,
      fontWeight: 700,

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
        fontSize: 28,
        lineHeight: 1.36,
      },
      {
        fontSize: 44,
        lineHeight: 1.23,
      }
    ),
    display2: combineMobileDesktopStyles(
      {
        ...base,
        ...display,
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1.42,
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
        fontSize: 18,
        lineHeight: '24px',
      },
      {
        fontSize: 24,
        lineHeight: '30px',
      }
    ),
    body: combineMobileDesktopStyles(base, {
      fontSize: 17,
      lineHeight: 1.59,
    }),
    body2: combineMobileDesktopStyles(
      {
        ...base,
        fontSize: 17,
        lineHeight: 1.59,
      },
      {
        fontSize: 20,
        lineHeight: 1.5,
      }
    ),
    quote: combineMobileDesktopStyles(
      {
        ...base,
        fontStyle: 'normal',
        color: colors.black.default,
      },
      {
        fontSize: 17,
        lineHeight: 1.59,
      }
    ),
    button: combineMobileDesktopStyles(
      {
        ...global,
        fontWeight: 500,
        fontSize: 13,
        textTransform: 'uppercase',
        lineHeight: 1,
        letterSpacing: '1px',
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
        color: colors.black.default,
        fontWeight: 700,
      },
      {
        fontSize: 30,
      }
    ),
    muted: combineMobileDesktopStyles({
      fontSize: 17,
    }),
  };
};

export { creatyTypography };
export default creatyTypography;
