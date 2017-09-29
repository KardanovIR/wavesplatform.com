const styles = theme => ({
    root: {
        ...theme.typography.body,

        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,

        fontWeight: 500,

        // RESET default browser styles
        margin: 0,
        outline: 'none',
        border: 0,

        display: 'inline-block',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        background: 'none',

        borderRadius: theme.spacing.radius,

        backgroundColor: theme.palette.gray[500],
        color: theme.palette.primary[900],

        boxSizing: 'border-box',
        padding: theme.spacing.getSpacing(0, 1.5),

        transition: theme.transitions.create('background-color'),

        '&:focus': {
            backgroundColor: theme.palette.gray[300],
        },

        '&::-webkit-input-placeholder': {
            color: theme.palette.primary[900]
        },
        '&::-moz-placeholder': {
            color: theme.palette.primary[900]
        },
        '&:-ms-placeholder': {
            color: theme.palette.primary[900]
        },
        '&::-ms-input-placeholder': {
            color: theme.palette.primary[900]
        },
    },
    disabled: {
        opacity: 0.6,
        pointerEvents: 'none'
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.danger[500]}`
    },
})


export default styles;