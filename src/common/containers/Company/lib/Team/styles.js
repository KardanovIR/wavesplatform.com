const styles = theme => ({
    [theme.breakpoints.up('xs')]: {
        Team: {
            flexDirection: "row",
            overflowY: "hidden",
            flexWrap: 'nowrap',

            '&::-webkit-scrollbar': {
                width: 0,
            },
            '-ms-overflow-style': "none",
            overflow: "-moz-scrollbars-none",
        }
    }
})

export default styles;