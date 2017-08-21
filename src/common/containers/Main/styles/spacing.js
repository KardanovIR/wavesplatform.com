export default theme => ({
    paddedTop: {
        paddingTop: theme.spacing.unit * 5,
        [theme.mixins.atMedia('md')]: {
            paddingTop: theme.spacing.unit * 8
        },
        [theme.mixins.atMedia('lg')]: {
            paddingTop: theme.spacing.unit * 12
        }
    },
    paddedBottom: {
        paddingBottom: theme.spacing.unit * 5,
        [theme.mixins.atMedia('md')]: {
            paddingBottom: theme.spacing.unit * 8
        },
        [theme.mixins.atMedia('lg')]: {
            paddingBottom: theme.spacing.unit * 12
        }
    },
    section: {
        composes: [
            '$paddedTop',
            '$paddedBottom',
        ]
    },
    sectionNarrow: {
        padding: theme.spacing.getSpacing(3, 0),
        [theme.mixins.atMedia('md')]: {
            padding: theme.spacing.getSpacing(6, 0),
        },
        [theme.mixins.atMedia('lg')]: {
            padding: theme.spacing.getSpacing(10, 0),
        }
    },

    withBackground: {
        padding: theme.spacing.getSpacing(8, 0),
        [theme.mixins.atMedia('md')]: {
            padding: theme.spacing.getSpacing(12, 0),
        },
        [theme.mixins.atMedia('lg')]: {
            padding: theme.spacing.getSpacing(20, 0),
        }
    },

    marginSmall: {
        marginBottom: theme.spacing.unit
    },

    footerMarginCompensate: {
        marginBottom: -theme.spacing.unit * 8,
        [theme.mixins.atMedia('sm')]: {
            marginBottom: - theme.spacing.unit * 13
        },
        [theme.mixins.atMedia('md')]: {
            marginBottom: - theme.spacing.unit * 15
        },
        [theme.mixins.atMedia('lg')]: {
            marginBottom: - theme.spacing.unit * 25
        },
    },
})