const styles = theme => ({
    Team: {
        flexDirection: "row",
        overflowY: "hidden",
        flexWrap: 'nowrap',

        '&::-webkit-scrollbar': {
            width: 0,
        },
        '-ms-overflow-style': "none",
        overflow: "-moz-scrollbars-none",
    },
    title: {
        fontSize: 16,
    },
    [theme.breakpoints.up('tablet')]: {
        Team: {
            overflowY: "hidden",
            flexWrap: 'wrap',
        },
        title: {
            fontSize: 19,
        },
    },

})

export default styles;