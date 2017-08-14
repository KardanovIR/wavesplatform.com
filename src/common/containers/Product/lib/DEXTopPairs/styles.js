const styles = theme => ({
    root: {
        paddingBottom: 0
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            marginTop: theme.spacing.unit * 12
        }
    }
})

export default styles;