const styles = theme => ({
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