export default theme => ({
    desktopOnly: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    },

    bg: {
        // composes: '$desktopOnly',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('lg')]: {
            minWidth: 2560,
        }
    },

    bgTokens: {
    },

    bgFeatures: {

    },

    bgSubscription: {
        backgroundColor: '#000',
    },
})
