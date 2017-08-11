import flexCentered from '../../styles/flexCentered';


export default theme => ({
    root: {
        position: 'relative',
        marginTop: theme.spacing.unit * 6
    },
    footer: {
        padding: theme.spacing.getSpacing(6, 0, 4),
        background: theme.palette.gray[900],
    },
    row: {
        alignItems: 'center'
    },
    background: {
        background: theme.palette.gray[900],
        transformOrigin: 'left top'
    },
    backgroundWrapper: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: '35%'
    },

    // blocks
    social: {
        marginBottom: theme.spacing.unit * 4,
    },
    nav: {
        marginBottom: theme.spacing.unit * 3
    },
    language: {
        marginBottom: theme.spacing.unit,
        textAlign: 'center'
    },
    copyright: { 
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center'
    }, 

    logo: flexCentered,

    navWrapper: {
        textAlign: 'center',
        '&:after': {
            content: '""',
            display: 'block',
            clear: 'both'
        }
    },

    [theme.mixins.atMedia('sm')]: {
        root: {
            marginTop: theme.spacing.unit * 8
        },
    },

    [theme.mixins.atMedia('md')]: {
        root: {
            marginTop: theme.spacing.unit * 16
        },
        footer: {
            padding: theme.spacing.getSpacing(6, 0, 6)
        },
        social: {
            order: 1,
            margin: 0
        },
        nav: {
            order: 2,
            margin: 0
        },
        logo: {
            order: 3,
            margin: 0
        },
        language: {
            textAlign: 'left',
            order: 4,
            marginTop: theme.spacing.unit * 4,
        },
        copyright: {
            order: 5,
            textAlign: 'right',
            marginTop: theme.spacing.unit * 4,
        },
        navWrapper: {
            float: 'right',
        },
    },

    [theme.mixins.atMedia('lg')]: {
        root: {
            marginTop: theme.spacing.unit * 20
        },
    }
})