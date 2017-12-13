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
    [theme.breakpoints.up('md')]: {
        Team: {
            overflowY: "hidden",
            flexWrap: 'wrap',
        },
    },

})

export default styles;