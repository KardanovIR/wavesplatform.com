export default {
    wrapper: {
        position: 'relative'
    },
    burger: {
        width: 32,
        height: 32,
        padding: 4
    },
    popover: {
        position: 'absolute',
        right: 0,
        top: 0,
        opacity: 0,
        transition: '200ms opacity ease-in-out, 200ms transform ease-in-out',
        transform: 'scale(0.6)',
        transformOrigin: 'right top'
    },
    enteringPopover: { opacity: 1, transform: 'scale(1)' },
    enteredPopover: { opacity: 1, transform: 'scale(1)' },
    exitingPopover: { opacity: 0, transform: 'scale(0.6)' },
    exitedPopover: hidden,
    unmountedPopover: { opacity: 0 },
}