export default theme => ({
    title: {
        fontSize: 40,
        fontWeight: 400,
    },
    text: {
        fontSize: 26,
        lineHeight: 1.05,
        fontWeight: 400,
    },
    [theme.breakpoints.up("md")]:{
        title: {
            fontSize: 80,
            fontWeight: 400,
        },
        text: {
            fontSize: 32,
            lineHeight: 1.20,
            fontWeight: 400,
        },
    }
});