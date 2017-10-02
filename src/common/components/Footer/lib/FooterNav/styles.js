export default theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.gray[600],
        display: 'inline-block',
        padding: theme.spacing.getSpacing(1, 1),
        transition: theme.transitions.create(
            'color',
            theme.transitions.durationShort
        ),
        '&:hover': {
            color: theme.palette.gray[0]
        },

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.getSpacing(1, 2),
        }
    },
})