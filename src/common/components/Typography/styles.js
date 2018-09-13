const getCutStyle = paddingDirection => ({ align, cut }) => {
  if (
    !cut ||
    (align === 'right' && paddingDirection === 'right') || // both right
    (align !== 'right' && paddingDirection === 'left') // both left
  ) {
    return undefined;
  }

  return `${cut === true ? 10 : cut}%`;
};

const generateAligns = theme =>
  ['left', 'right', 'center'].reduce((acc, v) => {
    acc[`align-${v}`] = {
      textAlign: ({ alignMobile }) => alignMobile,
      [theme.breakpoints.up('tablet')]: {
        textAlign: ({ align }) => align,
      },
    };
    return acc;
  }, {});

const styles = theme => ({
  body: {
    extend: [theme.typography.body, theme.spacing.body],
    fontWeight: ({ weight }) => weight || theme.typography.body.fontWeight,
  },
  body2: {
    extend: [theme.typography.body2, theme.spacing.body],
    fontWeight: ({ weight }) => weight || theme.typography.body2.fontWeight,
  },
  display5: {
    extend: [theme.typography.display5, theme.spacing.display5],
    fontWeight: ({ weight }) => weight || theme.typography.display5.fontWeight,
  },
  display4: {
    extend: [theme.typography.display4, theme.spacing.display4],
    fontWeight: ({ weight }) => weight || theme.typography.display4.fontWeight,
  },
  display3: {
    extend: [theme.typography.display3, theme.spacing.display3],
    fontWeight: ({ weight }) => weight || theme.typography.display3.fontWeight,
  },
  display3Inverted: {
    extend: [theme.typography.display3Inverted, theme.spacing.display3],
    fontWeight: ({ weight }) => weight || theme.typography.display3.fontWeight,
  },
  display2: {
    extend: [theme.typography.display2, theme.spacing.display2],
    fontWeight: ({ weight }) => weight || theme.typography.display2.fontWeight,
  },
  display1: {
    extend: [theme.typography.display1, theme.spacing.display1],
    fontWeight: ({ weight }) => weight || theme.typography.display1.fontWeight,
  },
  displayCustom: {
    extend: [theme.typography.displayCustom, theme.spacing.display1],
    fontWeight: ({ weight }) => weight || theme.typography.display1.fontWeight,
  },
  quote: {
    extend: [theme.typography.quote, theme.spacing.quote],
    fontWeight: ({ weight }) => weight || theme.typography.quote.fontWeight,
  },
  numeral: {
    extend: [theme.typography.numeral, theme.spacing.numeral],
    fontWeight: ({ weight }) => weight || theme.typography.numeral.fontWeight,
  },
  inverted: {
    color: theme.palette.gray[0],
  },
  dimmed: {
    color: theme.palette.grayBlue[200],
  },
  muted: {
    extend: [theme.typography.muted, theme.spacing.muted],
    color: theme.colors.gray[400],
  },
  // colored: {
  //     color: ({ color }) => color ? theme.palette.getColor(color) : 'inherit'
  // },
  ...generateAligns(theme),

  noMargin: {
    margin: '0 !important',
  },

  [theme.breakpoints.up('md')]: {
    cut: {
      paddingLeft: getCutStyle('left'),
      paddingRight: getCutStyle('right'),
    },
  },
});

export default styles;
