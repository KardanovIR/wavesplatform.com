const styles = theme => ({
    root: {},
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