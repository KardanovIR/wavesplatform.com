export default theme => ({
    wrapper: {
        position: 'relative'
    },
    link: {
        ...theme.typography.body,
        textDecoration: 'none',
        color: theme.palette.gray[900],
        display: 'inline-block',
        padding: '10px 20px',
        transition: theme.transitions.create(
            'opacity',
            theme.transitions.durationShort
        ),
        '&:hover': {
            opacity: '.7'
        }
    },
})