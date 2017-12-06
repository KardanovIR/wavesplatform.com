const styles = theme => ({
    row: {
        textAlign: 'center',
        alignItems: 'center',
        padding: [theme.spacing.unit * 4, 0],
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
