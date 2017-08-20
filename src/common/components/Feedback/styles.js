const styles = theme => ({
    root: {
        // padding: theme.spacing.getSpacing(10, 0)
    },
    [theme.mixins.atMedia('lg')]: {
        imageCol: {
            paddingRight: theme.spacing.unit * 10
        }
    }
})

export default styles;