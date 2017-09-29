const getCutStyle = (paddingDirection) => ({ align, cut }) => {
    if (!cut
        || (align === 'right' && paddingDirection === 'right')  // both right
        || (align !== 'right' && paddingDirection === 'left')   // both left
    ) {
        return undefined;
    }

    return `${cut === true ? 20 : cut}%`
}



const styles = theme => ({
    body: {
        extend: [
            theme.typography.body,
            theme.spacing.body
        ]
    },
    body2: {
        extend: [
            theme.typography.body2,
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
    inverted: {
        color: theme.palette.gray[0]
    },
    dimmed: {
        color: theme.palette.gray[200]
    },
    // colored: {
    //     color: ({ color }) => color ? theme.palette.getColor(color) : 'inherit'
    // },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    },

    noMargin: {
        margin: '0 !important'
    },

    [theme.breakpoints.up('md')]: {
        cut: {
            paddingLeft: getCutStyle('left'),
            paddingRight: getCutStyle('right'),
        }
    }

})


export default styles;