export default theme => ({
    // paddedTop: theme.spacing.paddedTop,
    paddedTopWide: theme.spacing.paddedTopWide,
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

    footerMarginCompensate: {
        marginBottom: -theme.spacing.unit * 2,
    },
})