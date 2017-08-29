export default theme => ({
    widthSetter: {
        overflow: 'visible',
        width: '100%',
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '58.33%',
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
        // backgroundColor: 'rgba(0,0,0,.5)',
    },

    [theme.breakpoints.up('sm')]: {
        widthSetter: {
            width: 640,
        },
        image: {
            left: -40,
            top: -40,
        },
    },
    [theme.breakpoints.up('md')]: {
        widthSetter: {
            width: 900,
        },
        image: {
            top: -70,
            left: -50,
        },
    },
    [theme.breakpoints.up('lg')]: {
        widthSetter: {
            width: 1200,
        },
        image: {
            top: -110,
            left: 15,
        },
    },
})