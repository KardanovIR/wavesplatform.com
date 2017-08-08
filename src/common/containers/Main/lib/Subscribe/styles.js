const styles = theme => ({
    root: {
        margin: '0 auto',
        maxWidth: '600px',
        // padding: theme.spacing.getSpacing(10, 0)
    },
    title: {
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    text: {
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    background: {
        background: theme.palette.gray[900]
    }
})

export default styles;