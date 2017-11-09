const styles = theme => ({
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
    },

    text: {
        borderBottom: '1px solid',
    },

    pseudo: {
        borderBottomStyle: 'dashed !important',
    },

    noDecoration: {
        border: 0,
    },

    primary: {
        color: theme.palette.primary[500],
        ['&:hover, &:active']: {
            color: theme.palette.primary[300],
        },
        ['& $text']: {
            borderColor: theme.palette.opaque(theme.palette.primary[500], 0.5),
        },
        ['&:hover $text, &:active $text']: {
            borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
        },
    },

    secondary: {
        color: theme.palette.orange[300],
        ['&:hover, &:active']: {
            color: theme.palette.gray[0],
        },
        ['& $text']: {
            borderColor: theme.palette.opaque(theme.palette.orange[300], 0.5),
        },
        ['&:hover $text, &:active $text']: {
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
    },

    inverted: {
        color: theme.palette.grayBlue[200],
        ['&:hover, &:active']: {
            color: theme.palette.gray[0],
        },
        ['& $text']: {
            borderColor: theme.palette.opaque(theme.palette.grayBlue[200], 0.5),
        },
        ['&:hover $text, &:active $text']: {
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
    },

    icon: {
        display: 'inline-block',
        marginLeft: '0.5em',
        height: '.7em',
        width: '.7em',
        verticalAlign: '-3%',
    },
});

export default styles;
