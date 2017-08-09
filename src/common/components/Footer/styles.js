import flexCentered from '../../styles/flexCentered';


export default theme => ({
    root: {
        marginTop: -50,
        padding: theme.spacing.getSpacing(6, 0, 4)
    },
    row: {
        alignItems: 'center'
    },
    background: {
        background: theme.palette.gray[900],
        borderTop: `1px solid ${theme.palette.gray[300]}`
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

    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(8, 0, 6)
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
})