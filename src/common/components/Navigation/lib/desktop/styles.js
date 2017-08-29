export default theme => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-block',
        padding: theme.spacing.getSpacing(1, 3),
        opacity: 1,
        transition: theme.transitions.create(
            'opacity',
            theme.transitions.durationShort
        ),
        '&:hover': {
            opacity: 0.7
        }
    },
    active: {
        opacity: 0.7
    }
})