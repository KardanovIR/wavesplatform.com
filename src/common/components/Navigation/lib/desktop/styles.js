export default theme => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-block',
        padding: theme.spacing.getSpacing(1, 3),
        transition: theme.transitions.create(
            'opacity',
            theme.transitions.durationShort
        ),
        '&:hover': {
            opacity: '.7'
        }
    },
})