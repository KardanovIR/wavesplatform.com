const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5)
    },
    column: {
        display: 'flex',
        marginBottom: theme.spacing.unit * 2
    },
    panel: {
        flex: 1
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 15)
        },
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    }
})

export default styles;