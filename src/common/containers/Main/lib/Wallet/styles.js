const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5)
    },
    feature: {
        marginBottom: theme.spacing.unit * 3
    },
    background: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
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