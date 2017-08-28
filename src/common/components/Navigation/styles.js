export default theme => ({
    wrapper: {
        marginBottom: theme.spacing.unit*4,
        '&:after': {
            content: '""',
            display: 'block',
            clear: 'both'
        }
    },
    logo: {
        float: 'left',
        height: 40,
        width: 40
    },
    navContainer: {
        float: 'right',
        position: 'relative',
        zIndex: 1,
    },
    mobileOnly: {
        display: 'block',
        [theme.mixins.atMedia('md')]: {
            display: 'none'
        }
    },
    desktopOnly: {
        display: 'none',
        [theme.mixins.atMedia('md')]: {
            display: 'block'
        }
    }
} )