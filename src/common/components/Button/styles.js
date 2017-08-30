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

        transition: theme.transitions.create(['transform']),
        willChange: 'transform',
        // transformOrigin: 'center bottom',

        boxShadow: '0 2px 4px 0 rgba(39, 47, 89, 0.25)',

        // for HOVER and FOCUS ANIMATIONS
        '&:after, &:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: theme.spacing.radius,
            opacity: 0,
            transition: theme.transitions.create(['opacity']),
            willChange: 'opacity',
        },

        '&:before': {
            zIndex: 2,
            background: 'rgba(255,255,255,.2)',
        },
        '&:after': {
            boxShadow: '0 2px 9px 2px rgba(39, 47, 89, .25)',
        },

        '&:hover': {
            transform: 'scale(1.01) translateY(-1px)',
            '&:after, &:before': { opacity: 1 }
        },

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
            '&:before': { opacity: 0.3 }
        },
    },
    light: {
        backgroundColor: theme.palette.gray[0],
        transformOrigin: 'center bottom',

        '& $content, & $spinner': {
            color: theme.palette.primary[700]
        },
    },

    bordered: {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 1px ${theme.palette.gray[0]}`,

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