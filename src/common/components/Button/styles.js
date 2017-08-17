const getFontColor = color => {
    // console.log(color)
    if (parseInt(color.split('-')[1]) > 400) {
        return 'gray-0'
    } else {
        return 'gray-900'
    }
}


const styles = theme => ({
    button: {
        // RESET default browser styles
        background: 'none',
        border: 0,
        outline: 'none',
        font: 'inherit',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        textDecoration: 'none',
        
        display: 'inline-block',
        position: 'relative',

        cursor: 'pointer',
        borderRadius: theme.spacing.radius,
        backgroundColor: ({ color }) => theme.palette.getColor(color),

        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,

        padding: theme.spacing.getSpacing(0, 4),

        transition: theme.transitions.create('opacity'),

        '&:disabled': {
            opacity: 0.6,
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
        display: 'flex',
        justiryContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: ({ color }) => theme.palette.getColor(getFontColor(color)),
    },
    contentHidden: {
        opacity: 0
    },
    icon: {
        marginRight: theme.spacing.unit * 1.5
    },
    text: {
        ...theme.typography.button,
    },
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 24,
        width: 24
    }
})


export default styles;