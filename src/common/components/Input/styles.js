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

        // RESET default browser styles
        margin: 0,
        outline: 'none',
        border: 0,

        display: 'inline-block',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        background: 'none',
        lineHeight: 1,

        borderRadius: theme.spacing.radius,

        backgroundColor: ({ color }) => theme.palette.getColor(color),
        color: ({ color }) => theme.palette.getColor(getFontColor(color)),

        padding: theme.spacing.getSpacing(1.5, 1.5),

        transition: theme.transitions.create('opacity'),
    },
    disabled: {
        opacity: 0.6,
        pointerEvents: 'none'
    },
    invalid: {
        border: '1px solid red'
    }
})


export default styles;