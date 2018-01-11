export default theme => ({
    title: {
        fontSize: 16,
        fontWeight: 400,
    },
    text: {
        fontSize: 23,
    },
    titleText: {
        fontSize: 16,
        lineHeight: 1.21,
        fontWeight: 500,
    },
    textQuote: {
        fontSize: 16,
        lineHeight: 1.35,
        fontWeight: 400,
    },
    [theme.breakpoints.up("md")]: {
        flexer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '&>div:first-child': {
                marginRight: theme.spacing.unit * 3,
            }
        },
        title: {
            fontSize: 23,
            fontWeight: 400,
        },
        text: {
            fontSize: 32,
        },
        titleText: {
            fontSize: 19,
            lineHeight: 1.35,
            fontWeight: 500,
        },
        textQuote: {
            fontSize: 17,
            lineHeight: 1.35,
            fontWeight: 400,
        }
    }
});
