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
        backgroundImage: 'linear-gradient(200deg, #c0dafd 0, rgba(255, 255, 255, 0.0) 50%)'
    },
    
    bgDex: {
        composes: '$bg',
        backgroundImage: 'linear-gradient(-200deg, #F7F9FC 0%, rgba(255, 255, 255, 0) 50%)'
    },

    bgTokens: {
        composes: '$bg',
        backgroundImage: 'linear-gradient(150deg, #c0dafd 0, rgba(255, 255, 255, 0.0) 50%)'
    },

    bgFeatures: {
        composes: '$bg',
        background: theme.palette.gray[50]
    },

    bgSubscription: {
        backgroundColor: '#233556',
    },

    // bgMain: {
    //     composes: '$bg',
    //     backgroundImage: `url(${require('../img/bg/1_bgr.svg')})`,
    //     backgroundSize: 'cover',
    //     top: -100,
    //     height: 'calc(900px - 50vw)',
    //     [theme.mixins.atMedia('md')]: {
    //         backgroundPosition: 'top center',
    //         top: -200,
    //         height: 1000
    //     },
    //     [theme.mixins.atMedia('lg')]: {
    //         top: -230,
    //         height: 'calc(1400px - 30vw)',
    //         minHeight: 900
    //     }
    // },
    // bgClient: {
    //     composes: [
    //         '$bg',
    //         '$desktopOnly'
    //     ],
    //     top: -100,
    //     backgroundSize: '100%',
    //     backgroundImage: `url(${require('../img/bg/2_bgr.svg')})`,
    // },
    // bgWallet: {
    //     composes: [
    //         '$bg',
    //         '$desktopOnly'
    //     ],
    //     minWidth: 2500,
    //     backgroundSize: '100%',
    //     top: -200,
    //     backgroundImage: `url(${require('../img/bg/3_bgr.svg')})`,
    // },
    // bgDex: {
    //     composes: [
    //         '$bg',
    //         '$desktopOnly'
    //     ],
    //     minWidth: 2500,
    //     top: 'unset',  // bind to bottom
    //     bottom: -200,
    //     height: '120%',
    //     backgroundSize: '100%',
    //     backgroundImage: `url(${require('../img/bg/4_bgr.svg')})`,
    //     backgroundPosition: 'bottom center',
    // },
    // bgFeatures: {
    //     backgroundColor: '#d8e7fc',
    //     top: 'calc(50% - 24px)',
    //     [theme.mixins.atMedia('md')]: {
    //         backgroundColor: 'unset',
    //         minWidth: 2500,
    //         transform: 'translate(-50%, -50%)',
    //         backgroundRepeat: 'no-repeat',
    //         height: '140%',
    //         backgroundSize: '100%',
    //         backgroundImage: `url(${require('../img/bg/5_bgr.svg')})`,
    //     },
    // },
    // bgSubscription: {
    //     backgroundColor: '#274676',
    //     [theme.mixins.atMedia('md')]: {
    //         backgroundColor: 'unset',
    //         minWidth: 2500,
    //         transform: 'translate(-50%, -50%)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundPosition: 'center center',
    //         height: '150%',
    //         backgroundSize: '100%',
    //         backgroundImage: `url(${require('../img/bg/6_bgr.svg')})`,
    //     },
    // },

})