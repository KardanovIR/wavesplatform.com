const styles = theme => ({
    root: {},
    featuresRow: {
        justifyContent: 'space-around'
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