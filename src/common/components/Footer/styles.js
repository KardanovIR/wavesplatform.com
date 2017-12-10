import flexCentered from '../../styles/flexCentered';

export default theme => {
  return {
    root: {
      position: 'relative',
    },

    footer: {
      padding: theme.spacing.getSpacing(1, 2),
    },

    link: {
      border: 0,
      textDecoration: 'none',
      color: theme.palette.gray[400],
      display: 'inline-block',
      padding: theme.spacing.getSpacing(2, 2, 2, 0),
      transition: theme.transitions.create('opacity', theme.transitions.durationShort),

      [theme.breakpoints.up('md')]: {
        padding: theme.spacing.getSpacing(1, 2),

        '&:last-child': {
          paddingRight: 0
        }
      },
    },

    terms: {
      display: 'none',
      extend: 'link',
      fontSize: 12,
      padding: 0,
      [theme.breakpoints.up('sm')]: {
        padding: 0,
      },
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },

    // text
    textGray: {
      color: theme.palette.gray[400],
    },


    row: {
      alignItems: 'center',
    },

    // blocks
    social: {
      marginBottom: theme.spacing.unit * 4,
      order: 2,
    },
    nav: {
      margin: theme.spacing.getSpacing(3, 0, 2),
      order: 1,
    },
    language: {
      marginBottom: theme.spacing.unit,
      textAlign: 'center',
    },
    copyright: {
      fontSize: 12,
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing.getSpacing(2, 0),
      textAlign: 'center',
      order: 4
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      order: 3
    },
    logoLink: {
      position: 'relative',
      top: -3,
      opacity: 0.7,
      transition: theme.transitions.create('opacity'),
      '&:hover': {
        opacity: 1,
      },
      '& > svg > path:first-child': {
        fill: theme.palette.gray[400]
      }
    },

    navWrapper: {
      '&:after': {
        content: '""',
        display: 'block',
        clear: 'both',
      },
    },

    navContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },

    navLinkContainer: {
      width: '50%',
      margin: 0 + '!important',
    },

    [theme.mixins.atMedia('md')]: {
      footer: {
        padding: theme.spacing.getSpacing(10, 2),
      },
      social: {
        order: 1,
        margin: 0,
      },
      navContainer: {
        display: 'block'
      },
      navLinkContainer: {
        width: 'auto',
        '& + &': {
          margin: theme.spacing.getSpacing(1, 0, 0),
        }
      },
      nav: {
        order: 2,
        margin: 0,
      },
      logo: {
        margin: 0,
        justifyContent: 'flex-end',
      },
      language: {
        textAlign: 'left',
        order: 4,
        marginTop: theme.spacing.unit * 4,
      },
      copyright: {
        display: 'block',
        order: 5,
        textAlign: 'right',
        margin: theme.spacing.getSpacing(4, 0, 0),
      },
      navWrapper: {
        textAlign: 'center',
        float: 'right',
      },
    },
  };
};
