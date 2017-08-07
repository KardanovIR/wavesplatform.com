const getFontColor = color => {
    // console.log(color)
    if ( parseInt(color.split('-')[1]) > 400 ) {
        return 'gray-0'
    } else {
        return 'gray-900'
    }
}


const styles = theme => ({
    root: {
        // RESET default browser styles
        background: 'none',
        border: 0,
        outline: 'none',
        font: 'inherit',
        lineHeight: 'normal',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',

        cursor: 'pointer',
        borderRadius: theme.spacing.radius,
        backgroundColor: ({ color }) => theme.palette.getColor(color),
        padding: theme.spacing.getSpacing(1.5, 4),

        transition: theme.transitions.create('opacity'),

        '&:disabled': {
            opacity: 0.3,
            pointerEvents: 'none'
        },

        '&:hover': {
            opacity: 0.8
        },

        '&:active': {
            transform: 'translateY(1px)'
        }
    },
    content: {
        display: 'flex'
    },
    icon: {
        marginRight: theme.spacing.unit / 2
    },
    text: {
        ...theme.typography.button,
        color: ({ color }) => theme.palette.getColor(getFontColor(color)),
    }
})


export default styles;