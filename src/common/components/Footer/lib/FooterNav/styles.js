export default theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.gray[500],
        display: 'inline-block',
        padding: theme.spacing.getSpacing(1, 3),
        transition: theme.transitions.create(
            'color',
            theme.transitions.durationShort
        ),
        '&:hover': {
            color: theme.palette.gray[0]
        }
    },
})