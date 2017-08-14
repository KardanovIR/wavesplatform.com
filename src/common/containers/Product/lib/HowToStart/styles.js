const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(10, 0),
        textAlign: 'center'
    },
    title: {
        maxWidth: 400,
        display: 'inline-block'
    },
    quote: {
        maxWidth: 650,
        display: 'inline-block'
    },
    column: {
        display: 'flex',
    },
    columnContent: {
        flex: 1
    }
})

export default styles;