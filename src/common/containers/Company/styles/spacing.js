export default theme => ({
    paddedTop: theme.spacing.paddedTop,
    paddedBottom: theme.spacing.paddedBottom,
    section: theme.spacing.section,
    sectionNarrow: theme.spacing.sectionNarrow,
    sectionWide: theme.spacing.sectionWide,

    
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
        marginBottom: -theme.spacing.unit * 7,
        [theme.mixins.atMedia('sm')]: {
            marginBottom: - theme.spacing.unit * 10
        },
        [theme.mixins.atMedia('lg')]: {
            marginBottom: - theme.spacing.unit * 19
        },
        [theme.mixins.atMedia('xl')]: {
            marginBottom: - theme.spacing.unit * 13
        },
    },
})