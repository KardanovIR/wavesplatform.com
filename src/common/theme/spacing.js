import { combineMobileDesktopStyles } from './utils/combineMobileDesktopStyles';

const isValidMeasure = measure => typeof measure === 'number';

const getSpacing = unit => (top, right, bottom, left) => {
  const spacing = {
    top: isValidMeasure(top) ? `${top * unit}px` : '',
    right: isValidMeasure(right) ? ` ${right * unit}px ` : '',
    bottom: isValidMeasure(bottom) ? ` ${bottom * unit}px ` : '',
    left: isValidMeasure(left) ? ` ${left * unit}px ` : '',
  };
  return spacing.top + spacing.right + spacing.bottom + spacing.left;
};

const createSpacing = (
  breakpoints,
  { unit = 8, radius = 4, inputHeight = 50 } = {},
) => ({
  unit,
  radius,
  inputHeight,
  getSpacing: getSpacing(unit),

  body: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 1 },
      { marginTop: unit * 1.5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 1.5 },
      { marginTop: unit * 2.5 },
    ),
  },

  body2: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 1 },
      { marginTop: unit * 1.5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 1.5 },
      { marginTop: unit * 2.5 },
    ),
  },

  display7: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
  },

  display6: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
  },

  display5: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
  },

  display4: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
  },

  display3: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 2.5 },
      { marginTop: unit * 3.5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 3 },
      { marginTop: unit * 5 },
    ),
  },

  display2: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 1.5 },
      { marginTop: unit * 2.5 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 1.5 },
      { marginTop: unit * 2.5 },
    ),
  },

  display1: {
    '& + $body': combineMobileDesktopStyles(
      { marginTop: unit * 1 },
      { marginTop: unit * 2 },
    ),
    '& + $body2': combineMobileDesktopStyles(
      { marginTop: unit * 2 },
      { marginTop: unit * 2.5 },
    ),
    '& + $display3': combineMobileDesktopStyles(
      { marginTop: unit * 2 },
      { marginTop: unit * 2.5 },
    ),
  },

  quote: {
    // '& + $body': combineMobileDesktopStyles({ marginTop: unit * 1 }, { marginTop: unit * 1.5 }),
  },

  numeral: {
    // '& + $body': combineMobileDesktopStyles(
    //     { marginTop: unit * 1 },
    //     { marginTop: unit * 1.5 }
    // )
  },

  muted: {
    padding: [unit * 1.25, 0],
  },

  section: {
    padding: [unit * 8, 0],
    [breakpoints.up('sm')]: {
      padding: [unit * 10, 0],
    },
    [breakpoints.up('md')]: {
      padding: [unit * 12, 0],
    },
    [breakpoints.up('lg')]: {
      padding: [unit * 14, 0],
    },
  },

  sectionNarrow: {
    padding: [unit * 3, 0],
    [breakpoints.up('md')]: {
      padding: [unit * 6, 0],
    },
    [breakpoints.up('lg')]: {
      padding: [unit * 10, 0],
    },
  },

  sectionWide: {
    padding: [unit * 8, 0, unit * 7],
    [breakpoints.up('md')]: {
      padding: [unit * 15, 0, unit * 14],
    },
    [breakpoints.up('lg')]: {
      padding: [unit * 20, 0, unit * 18],
    },
  },

  paddedTop: {
    paddingTop: unit * 8,
    [breakpoints.up('sm')]: {
      paddingTop: unit * 10,
    },
    [breakpoints.up('md')]: {
      paddingTop: unit * 12,
    },
    [breakpoints.up('lg')]: {
      paddingTop: unit * 14,
    },
  },

  paddedTopWide: {
    paddingTop: unit * 8,
    [breakpoints.up('sm')]: {
      paddingTop: unit * 12,
    },
    [breakpoints.up('md')]: {
      paddingTop: unit * 15,
    },
    [breakpoints.up('lg')]: {
      paddingTop: unit * 20,
    },
  },

  paddedBottom: {
    paddingBottom: unit * 8,
    [breakpoints.up('sm')]: {
      paddingBottom: unit * 10,
    },
    [breakpoints.up('md')]: {
      paddingBottom: unit * 12,
    },
    [breakpoints.up('lg')]: {
      paddingBottom: unit * 14,
    },
  },
});

export default createSpacing;
