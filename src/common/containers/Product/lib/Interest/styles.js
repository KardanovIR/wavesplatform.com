import bgImage from 'src/common/styles/bgImage';

const styles = theme => ({
  row: {
    margin: theme.spacing.getSpacing(0, -2),
  },
  column: {
    display: 'flex',
  },
  columnGray: {
    backgroundColor: theme.palette.gray[700],
  },
  columnBlue: {
    backgroundColor: theme.palette.blue[300],
  },
  panel: {
    flex: '1 0',
    padding: theme.spacing.getSpacing(8, 0, 5),
  },
  panelTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    ...bgImage,
    height: theme.spacing.unit * 5,
    flex: [0, 0, `${theme.spacing.unit * 5}px`],
    marginRight: theme.spacing.unit * 2,
  },
  linkContainer: {
    marginTop: theme.spacing.unit * 5,
  },
  link: {
    color: theme.palette.gray[0],
  },
  [theme.mixins.atMedia('md')]: {
    row: {
      margin: theme.spacing.getSpacing(0, -1.5, 5),
    },
    panel: {
      padding: theme.spacing.getSpacing(4, 2, 5),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    feature: {
      marginBottom: theme.spacing.unit * 6,
    },
  },
});

export default styles;
