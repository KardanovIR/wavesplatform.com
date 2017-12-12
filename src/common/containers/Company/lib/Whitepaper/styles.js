const styles = theme => ({
    image: {
        display: 'block',
        maxWidth: '100%',
    },
    text: {
        lineHeight: 1.3,
        paddingRight: 0,
    },
    [theme.breakpoints.up('md')]: {
        image: {
            margin: [0, 'auto'],
        }
    },
    svgrow:{
        boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .09)',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
    }
})

export default styles;