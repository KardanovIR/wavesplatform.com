export default theme => ({
    wrapper: {
        height: 70
    },
    inputs: {
        display: 'flex',
        marginBottom: theme.spacing.unit
    },
    inputWrapper: {
        flex: '1',
        marginRight: theme.spacing.unit
    },
    input: {
        width: '100%'
    },
    buttonWrapper: {
        flex: '0 0'
    },
    buttonFull: {
        display: 'none'
    },
    [theme.mixins.atMedia('sm')]: {
        buttonIcon: {
            display: 'none'
        },
        buttonFull: {
            display: 'inline-block'
        }
    }
})