import shadow from 'src/common/styles/shadow';

export default theme => ({
    root: {
        padding: theme.spacing.getSpacing(3, 2.5),
        borderRadius: theme.spacing.radius,
        boxSizing: 'border-box'
    },
    light: {
        ...shadow,
        background: theme.palette.gray[0],
    },
    dark: {
        background: theme.palette.primary[700],
        color: theme.palette.gray[50],
    },
    bordered: {
        border: `1px solid ${theme.palette.gray[100]}`
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(5, 5, 5.5),
            borderRadius: theme.spacing.radius,
        },
    }
})