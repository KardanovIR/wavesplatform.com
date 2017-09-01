const styles = theme => ({
    row: {
        textAlign: 'center',
        alignItems: 'center',
        padding: [theme.spacing.unit * 4, 0],

        position: 'relative',

        '&:before, &:after': {
            content: '""',
            
            display: 'block',
            position: 'absolute',
            left: 0,

            height: 1,
            width: '100%',
            backgroundImage: `radial-gradient(circle at center, ${theme.palette.gray[100]} 0, rgba(255,255,255,0) 100%)`,
        },
        '&:before': {
            top: 0
        },
        '&:after': {
            bottom: 0
        }
    },
    withMargin: {
        marginBottom: theme.spacing.unit * 2
    },
    fact: {
        maxWidth: '350px',
        margin: '0 auto',
        color: theme.palette.primary[500]
    },
    wrapper: {
        borderTop: `1px solid ${theme.palette.gray[50]}`,
        borderBottom: `1px solid ${theme.palette.gray[50]}`,
    },
    [theme.mixins.atMedia('lg')]: {
        row: {
            padding: [theme.spacing.unit * 6, 0],
        },
        withMargin: {
            marginBottom: 0
        }
    }
})

export default styles;