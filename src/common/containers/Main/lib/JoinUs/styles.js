const styles = theme => ({
    article: {
        marginBottom: theme.spacing.unit * 6
    },
    quoteWrapper: {
        display: 'flex'
    },
    iconWrapper: {
        flex: '0 0 40px',
        marginRight: theme.spacing.unit * 3
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            flexDirection: 'row-reverse'
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