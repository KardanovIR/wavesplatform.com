const styles = theme => ({
    ...theme.typography,
    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    },

    // default margins
    'margin-display4': {
        marginBottom: theme.spacing.unit*2
    },
    'margin-display3': {
        marginBottom: theme.spacing.unit*2
    },
    'margin-display2': {
        marginBottom: theme.spacing.unit*2
    },
    'margin-display1': {
        marginBottom: theme.spacing.unit
    },
    'margin-body': {
        marginBottom: theme.spacing.unit
    },
    'margin-quote': {
        marginBottom: theme.spacing.unit
    },

    // pairings
    'margin-display4-body': {
        marginBottom: theme.spacing.unit*2
    },
})


export default styles;