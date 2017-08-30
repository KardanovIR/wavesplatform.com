export default theme => ({
    widthSetter: {
        overflow: 'visible',
        width: '100%',
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '56.36%',
        overflow: 'visible',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        // @todo remove
        // backgroundColor: 'rgba(255,50,0,.1)',
    },

    [theme.breakpoints.up('sm')]: {
        widthSetter: {
            width: 600,
        },
        image: {
            left: 0,
            top: -30,
        },
    },
    [theme.breakpoints.up('md')]: {
        widthSetter: {
            width: 800,
        },
        image: {
            top: -60,
            left: -30,
        },
    },
    [theme.breakpoints.up('lg')]: {
        widthSetter: {
            width: 1100,
        },
        image: {
            top: -100,
            left: 0,
        },
    },
})