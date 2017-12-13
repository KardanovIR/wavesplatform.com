const styles = theme => ({
    root: {
    },
    centered: {
        textAlign: 'center'
    },
    image: {
        display: 'block',
        width: '100%',
        paddingBottom: '60%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    narrow: {
        display: 'inline-block',
        maxWidth: 400,
    },
    link: {
        ...theme.typography.display1
    },
    div:{
        padding: theme.spacing.getSpacing(0, 2),
    },
})

export default styles;