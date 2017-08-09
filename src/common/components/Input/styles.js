const getFontColor = color => {
    // console.log(color)
    if (parseInt(color.split('-')[1]) > 400) {
        return 'gray-0'
    } else {
        return 'gray-900'
    }
}


const styles = theme => ({
    root: {
        ...theme.typography.body,

        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,

        // RESET default browser styles
        margin: 0,
        outline: 'none',
        border: 0,

        display: 'inline-block',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        background: 'none',

        borderRadius: theme.spacing.radius,

        backgroundColor: ({ color }) => theme.palette.getColor(color),
        color: ({ color }) => theme.palette.getColor(getFontColor(color)),

        boxSizing: 'border-box',
        padding: theme.spacing.getSpacing(0, 1.5),

        transition: theme.transitions.create('opacity'),
    },
    disabled: {
        opacity: 0.6,
        pointerEvents: 'none'
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.danger[500]}`
    }
})


export default styles;