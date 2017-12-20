
export default theme => ({
    Title: {
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 1.05,
    },
    description: {
        fontSize: 16,
    },
    [theme.breakpoints.up("md")]:{
        Title: {
            fontSize: 80,
        },
        description: {
            fontSize: 23,
        },
    }
});