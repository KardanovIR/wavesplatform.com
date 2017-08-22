import shadow from 'src/common/styles/shadow';

export default theme => ({
    root: {
        padding: theme.spacing.getSpacing(2.5, 2),
        borderRadius: theme.spacing.radius,
        boxSizing: 'border-box'
    },
    light: {
        ...shadow,
        background: theme.palette.gray[0],
    },
    dark: {
        // background: theme.palette.primary[700],
        background: theme.palette.gray[800],
        color: theme.palette.gray[50],
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(4, 5, 4.5),
            borderRadius: theme.spacing.radius,
        },
    }
})