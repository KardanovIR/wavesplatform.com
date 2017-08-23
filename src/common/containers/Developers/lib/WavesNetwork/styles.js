const styles = theme => ({
    text: {
        textAlign: 'center'
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    titleEl: {
        height: 40,
        flex: [0, 0, '40px'], 
    },
    divider: {
        height: 1,
        background: theme.palette.gray[50],
        margin: [theme.spacing.unit, 0]
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    }
})

export default styles;