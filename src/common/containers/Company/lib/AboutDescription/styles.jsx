const styles = theme => ({
    root: {
    },
    centered: {
        textAlign: 'center'
    },
    aboutText:{
        fontSize: 26,
        lineHeight: 1.25,
        [theme.breakpoints.up('md')]: {
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.3,
            textAlign: 'left',
        },
    }
})

export default styles;