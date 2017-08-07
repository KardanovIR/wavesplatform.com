const hidden = {
    position: 'absolute',
    top: -9999,
    left: -9999
}


export default theme => ({
    wrapper: {
        position: 'relative'
    },
    burger: {
        width: 32,
        height: 32,
        padding: theme.spacing.getSpacing(0, .5, 1)
    },
    popover: {
        position: 'absolute',
        right: 0,
        top: 0,
        opacity: 0,
        transition: '200ms opacity ease-in-out, 200ms transform ease-in-out',
        transform: 'scale(0.9)',
        transformOrigin: 'right top'
    },
    enteringPopover: { opacity: 1, transform: 'scale(1)' },
    enteredPopover: { opacity: 1, transform: 'scale(1)' },
    exitingPopover: { opacity: 0, transform: 'scale(0.9)' },
    exitedPopover: hidden,
    unmountedPopover: { opacity: 0 },
    linksWrapper: {
        padding: theme.spacing.getSpacing(7, 0)
    },
    link: {
        ...theme.typography.display1,
        textDecoration: 'none',
        color: theme.palette.gray[900],
        display: 'block',
        padding: theme.spacing.getSpacing(1, 5),
        marginRight: theme.spacing.unit*3,
        '&:active': {
            backgroundColor: theme.palette.gray[50]
        }
    },
})