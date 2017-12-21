const styles = ({ spacing, palette, breakpoints }) => ({
  column: {
    paddingBottom: spacing.unit * 4,
  },
  bgBlue: {
    background: palette.blue[300],
  },
  bgGray: {
    background: palette.gray[700],
  },
  panel: {
    padding: spacing.getSpacing(8, 0, 5),
  },
  imageWrapper: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [breakpoints.up('md')]: {
    panel: {
      padding: spacing.getSpacing(4, 2, 5),
    },
  },
});

export default styles;
