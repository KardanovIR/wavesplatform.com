export default theme => ({
    root: {
        position: 'relative'
    },
    image: {
        width: '100%',
        paddingBottom: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,.4)',
    },
    text: {
        position: 'absolute',
        bottom: theme.spacing.unit * 3,
        left: theme.spacing.unit * 3,
    },
    social: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    icon: {
        display: 'block',
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit/2,
        color: theme.palette.gray[50]
    },
    [theme.mixins.atMedia('md')]: {
        overlay: {
            opacity: 0,
            transition: theme.transitions.create('opacity', theme.transitions.duratonMedium),
            '&:hover': {
                opacity: 1
            }
        }
    }
})