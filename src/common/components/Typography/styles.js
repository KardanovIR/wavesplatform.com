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
    // body: mergeDeepLeft(
    //     theme.typography.body,
    //     theme.spacing.body
    // ),
    // display4: mergeDeepLeft(
    //     theme.typography.display4,
    //     theme.spacing.display4
    // ),
    // display3: mergeDeepLeft(
    //     theme.typography.display3,
    //     theme.spacing.display3
    // ),
    // display2: {
    //     ...theme.typography.display2,
    //     ...theme.spacing.display2,
    // },
    // display1: {
    //     ...theme.typography.display1,
    //     ...theme.spacing.display1,
    // },
    // quote: {
    //     ...theme.typography.quote,
    //     ...theme.spacing.quote,
    // },
    // numeral: {
    //     ...theme.typography.numeral,
    //     ...theme.spacing.numeral,
    // },

    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    }
})


export default styles;