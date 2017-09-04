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

    bgClient: {
        composes: '$bg',
        backgroundImage: 'linear-gradient(190deg, #c0dafd 0, rgba(255, 255, 255, 0.0) 50%)'
    },

    bgTokens: {
        composes: '$bg',
        backgroundImage: 'linear-gradient(160deg, rgba(232, 241, 254, 1) 0, rgba(232, 241, 254, 0.0) 50%)'
    },

    bgFeatures: {
        composes: '$bg',
        background: theme.palette.gray[50]
    },

    bgSubscription: {
        backgroundColor: '#233556',
    },
})