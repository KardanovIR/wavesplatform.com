export default theme => ({
    bg: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        transform: 'translateX(-50%)',
        top: 0,
    },
    bgMain: {
        composes: '$bg',
        backgroundImage: `url(${require('../img/bg/1_bgr.svg')})`,
        backgroundSize: 'cover',
        top: -100,
        // height: 'calc(900px - 50vw)',
        [theme.mixins.atMedia('md')]: {
            backgroundPosition: 'top center',
            top: -200,
            height: 'calc(1100px - 20vw)',
        },
        [theme.mixins.atMedia('lg')]: {
            top: -230,
            height: 'calc(1200px - 30vw)',
            minHeight: 750
        }
    },
    bgInterest: {
        composes: '$desktopOnly',
        backgroundImage: 'linear-gradient(25deg, rgba(0, 242, 255, 0.05) 0%, rgba(28, 0, 255, 0.05) 25%, rgba(255, 255, 255, 0) 50%)'
    },
    bgHowToStart: {
        composes: '$desktopOnly',
        backgroundImage: 'linear-gradient(-155deg, rgba(0, 134, 255, 0.1) 0%, rgba(255, 255, 255, 0) 35%)'
    },
    bgDex: {
        composes: [
            '$bg',
            '$desktopOnly'
        ],
        transform: 'translateX(-50%) rotate(180deg)',
        minWidth: 2500,
        // top: 'unset',  // bind to bottom
        // bottom: -200,
        top: -200,
        height: '140%',
        backgroundSize: '100%',
        backgroundImage: `url(${require('../img/bg/4_bgr.svg')})`,
        backgroundPosition: 'center bottom',
    },
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

    backgroundColor: {
        background: theme.palette.gray[50]
    },
    backgroundGradient: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
    },

})