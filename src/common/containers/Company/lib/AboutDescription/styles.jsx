const styles = theme => ({
    root: {
    },
    centered: {
        textAlign: 'center'
    },
    aboutText:{
        fontSize: 30,
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: 44,
            fontWeight: 400,
            lineHeight: 1.23,
            textAlign: 'left',
        },
    }
})

export default styles;