const styles = theme => ({
  text: {},
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  titleEl: {
    flex: [0, 0, '80px'],
    textAlign: 'center',
    '& svg': {
      width: 80,
      height: 80
    }
  },
  tableHeader: {
    display: 'none'
  },
  tableRow: {
    marginBottom: theme.spacing.unit * 3,
    alignItems: 'center'
  },
  titleCol: {
    borderBottom: `1px solid ${theme.palette.gray[600]}`,
    paddingBottom: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 2,
  },
  elipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [theme.mixins.atMedia('sm')]: {
    tableHeader: {
      display: 'flex',
      paddingBottom: theme.spacing.unit * 1.5
    },
    tableRow: {
      height: 115,
      borderTop: `1px solid ${theme.palette.gray[600]}`,
      marginBottom: 0
    },
    titleCol: {
      borderBottom: 0,
      paddingBottom: 0,
      marginBottom: 0
    }
  },
  [theme.mixins.atMedia('md')]: {
    buttonWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
});

export default styles;
