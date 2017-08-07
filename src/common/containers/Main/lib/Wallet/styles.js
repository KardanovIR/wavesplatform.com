const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(20, 0, 15)
    },
    feature: {
        marginBottom: theme.spacing.unit * 3
    },
    [theme.mixins.atMedia('md')]: {
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    }
})

export default styles;