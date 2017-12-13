const styles = theme => ({
    image: {
        display: 'block',
        //maxWidth: '100%',
        margin: [0, 'auto'],
        padding: theme.spacing.getSpacing(3, 0, 3, 0)
    },
    text: {
        lineHeight: 1.3,
        paddingRight: 0,
    },
    row: {
        flexDirection: 'column-reverse',
    },
    svgrow:{
        boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .09)',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        margin: theme.spacing.getSpacing(3, 1, 3, 1),
        //padding: theme.spacing.getSpacing(4, 4),
    },
    [theme.breakpoints.up('md')]: {
        row: {
            flexDirection: 'row',
        },
        svgrow: {
            margin: 0,
        }
    },

})

export default styles;