const styles = theme => ({
    imageCol: {
        marginBottom: theme.spacing.unit * 3
    },
    [theme.mixins.atMedia('md')]: {
        imageCol: {
            margin: 0
        }
    },
    [theme.mixins.atMedia('lg')]: {
        imageCol: {
            paddingRight: theme.spacing.unit * 10,
        }
    }
})

export default styles;