const styles = theme => ({
    root: {
        margin: '0 auto',
        maxWidth: '600px',
        padding: theme.spacing.getSpacing(6, 0, 10)
    },
    textCentered: {
        textAlign: 'center',
    },
    formWrapper: {
        margin: `${theme.spacing.unit * 3}px auto 0`,
        maxWidth: 400
    },
    background: {
        background: theme.palette.gray[900]
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 22)
        },
        formWrapper: {
            margin: `${theme.spacing.unit * 4}px auto 0`,
            maxWidth: 400
        },
    }
})

export default styles;