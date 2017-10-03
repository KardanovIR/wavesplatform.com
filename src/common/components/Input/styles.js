const setPlaceholderColor = color => ({
    '&::-webkit-input-placeholder': {
        color
    },
    '&::-moz-placeholder': {
        color
    },
    '&:-ms-placeholder': {
        color
    },
    '&::-ms-input-placeholder': {
        color
    },
})


const styles = theme => ({
    root: {
        ...theme.typography.body,

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

        backgroundColor: theme.palette.grayBlue[700],
        color: theme.palette.grayBlue[200],

        boxSizing: 'border-box',
        padding: theme.spacing.getSpacing(0, 1.5),

        transition: theme.transitions.create(['background-color', 'color']),

        '&::-moz-placeholder': {
            opacity: 1,
        },


        '&:focus': {
            // backgroundColor: theme.palette.grayBlue[300],
            backgroundColor: '#4d5d7e',
            // color: theme.palette.grayBlue[200],
            // ...setPlaceholderColor(theme.palette.primary[700]),
        },
        ...setPlaceholderColor(theme.palette.gray[600]),
    },
    input: {
        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,
    },
    textarea: {
        resize: 'none',
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    disabled: {
        opacity: 0.6,
        pointerEvents: 'none'
    },
    invalid: {
        // boxShadow: `inset 0 0 0 1px ${theme.palette.danger[500]}`
    },
})


export default styles;