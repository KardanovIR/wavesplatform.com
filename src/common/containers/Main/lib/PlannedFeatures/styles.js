const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5)
    },
    title: {
        marginBottom: theme.spacing.unit * 4
    },
    feature: {
        marginBottom: theme.spacing.unit * 3
    },
    background: {
        background: theme.palette.gray[50]
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 15)
        },
        title: {
            textAlign: 'center',
            marginBottom: theme.spacing.unit * 6
        },
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    },
    [theme.mixins.atMedia('lg')]: {
        title: {
            marginBottom: theme.spacing.unit * 10
        }
    }
})

export default styles;