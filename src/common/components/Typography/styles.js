const styles = theme => ({
    body: {
        extend: [
            theme.typography.body,
            theme.spacing.body
        ]
    },
    display4: {
        extend: [
            theme.typography.display4,
            theme.spacing.display4
        ]
    },
    display3: {
        extend: [
            theme.typography.display3,
            theme.spacing.display3
        ]
    },
    display2: {
        extend: [
            theme.typography.display2,
            theme.spacing.display2
        ]
    },
    display1: {
        extend: [
            theme.typography.display1,
            theme.spacing.display1
        ]
    },
    quote: {
        extend: [
            theme.typography.quote,
            theme.spacing.quote
        ]
    },
    numeral: {
        extend: [
            theme.typography.numeral,
            theme.spacing.numeral
        ]
    },

    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    },
    
    noMargin: {
        margin: '0 !important'
    }
})


export default styles;