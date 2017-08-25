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

        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,

        padding: theme.spacing.getSpacing(0, 4),

        transition: theme.transitions.create(['background-color', 'color']),

        boxShadow: '0 2px 4px 0 rgba(39, 47, 89, 0.25)',

        '&:disabled': {
            opacity: 0.6,
            pointerEvents: 'none'
        },

        '&:active': {
            transform: 'translateY(1px)'
        },
    },
    dark: {
        backgroundColor: theme.palette.primary[900],
        '& $content, & $spinner': {
            color: theme.palette.gray[0],
        },
        '&:hover': {
            backgroundColor: theme.palette.primary[700],
        },
        '&:focus': {
            backgroundColor: theme.palette.primary[700],
        },
    },
    light: {
        backgroundColor: theme.palette.gray[0],
        '& $content, & $spinner': {
            color: theme.palette.primary[700]
        },
        '&$button:hover': {
            backgroundColor: theme.palette.cyan[300],
        },
        '&$button:focus': {
            backgroundColor: theme.palette.cyan[300],
        },
    },
    bordered: {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px ${theme.palette.gray[0]}`,

        '& $content, & $spinner': {
            color: theme.palette.gray[0],
        },

        '&:hover, &:focus': {
            backgroundColor: theme.palette.gray[0],
            '& $content, & $spinner': {
                color: theme.palette.primary[700]
            }
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    contentHidden: {
        opacity: 0
    },
    icon: {
        marginRight: theme.spacing.unit * 1.5
    },
    text: theme.typography.button,
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