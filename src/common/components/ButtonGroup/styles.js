const styles = ({ spacing, palette, transitions }) => ({
  wrapper: {
    background: 'rgba(39, 47, 89, 0.22)',
    display: 'inline-flex',
    boxShadow: '0 2px 4px 0 rgba(39, 47, 89, 0.25)',
    borderRadius: spacing.radius,
  },
  button: {
    flex: 1,

    display: 'inline-block',
    cursor: 'pointer',

    height: spacing.inputHeight,
    lineHeight: `${spacing.inputHeight}px`,

    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontSize: 14,
    padding: [0, spacing.unit],

    background: palette.gray[0],
    color: palette.gray[300],

    boxSizing: 'border-box',
    border: '1px solid #f0f0f0',

    transition: transitions.create('transform'),
    willChange: 'transform',

    '&:hover:not($selected)': {
      transform: 'translateY(-2px)',
    },
  },
  selected: {
    background: palette.primary[500],
    borderColor: 'rgba(39, 47, 89, 0.15)',
    color: palette.gray[0],
    pointerEvents: 'none',
    boxShadow: 'inset 0 0 2px rgba(39, 47, 89, 0.25)',
    transition: 'none',
  },
  first: {
    borderTopLeftRadius: spacing.radius,
    borderBottomLeftRadius: spacing.radius,
  },
  last: {
    borderTopRightRadius: spacing.radius,
    borderBottomRightRadius: spacing.radius,
  },
});

export default styles;
