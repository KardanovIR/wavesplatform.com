const styles = theme => ({
    row: {
        textAlign: 'center',
        alignItems: 'center',
        padding: theme.spacing.getSpacing(4, 0)
    },
    withMargin: {
        marginBottom: theme.spacing.unit * 2
    },
    fact: {
        maxWidth: '300px',
        margin: '0 auto'
    },
    wrapper: {
        borderTop: `1px solid ${theme.palette.gray[50]}`,
        borderBottom: `1px solid ${theme.palette.gray[50]}`,
    },
    [theme.mixins.atMedia('lg')]: {
        withMargin: {
            marginBottom: 0
        }
    }
})

export default styles;