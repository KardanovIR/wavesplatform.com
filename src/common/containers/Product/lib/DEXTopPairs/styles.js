const styles = theme => ({
    root: {
        paddingBottom: 0,

    },
    headers: {
        display: 'flex',
        alignItems: "flex-end",
        justifyContent: 'space-between'
    },
    textGray: {
        color: theme.palette.gray[300],
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            marginTop: theme.spacing.unit * 12
        }
    }
})

export default styles;