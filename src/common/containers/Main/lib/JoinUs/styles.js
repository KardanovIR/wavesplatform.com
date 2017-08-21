const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5),
        flexDirection: 'row-reverse'
    },
    article: {
        marginBottom: theme.spacing.unit * 6
    },
    quoteWrapper: {
        display: 'flex'
    },
    iconWrapper: {
        flex: 0,
        flexBasis: 41,
        marginRight: theme.spacing.unit * 3
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 15)
        },
        article: {
            marginBottom: 0
        },
        feature: {
            marginBottom: theme.spacing.unit * 6
        },
        iconWrapper: {
            marginRight: theme.spacing.unit * 4
        }
    }
})

export default styles;