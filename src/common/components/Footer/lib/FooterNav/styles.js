export default theme => ({
    link: {
        ...theme.typography.body,
        textDecoration: 'none',
        color: theme.palette.gray[50],
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