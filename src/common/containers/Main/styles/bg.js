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
        height: 'calc(900px - 50vw)',
        [theme.mixins.atMedia('md')]: {
            backgroundPosition: 'top center',
            top: -200,
            height: 950,
        },
        [theme.mixins.atMedia('lg')]: {
            top: -230,
            height: 900
        }
    },
    bgClient: {
        composes: [
            '$bg',
            '$desktopOnly'
        ],
        top: -100,
        backgroundSize: '100%',
        backgroundImage: `url(${require('../img/bg/2_bgr.svg')})`,
    },
    bgWallet: {
        composes: [
            '$bg',
            '$desktopOnly'
        ],
        minWidth: 2500,
        backgroundSize: '100%',
        top: -200,
        backgroundImage: `url(${require('../img/bg/3_bgr.svg')})`,
    },
    bgDex: {
        composes: [
            '$bg',
            '$desktopOnly'
        ],
        minWidth: 2500,
        top: 'unset',  // bind to bottom
        bottom: -200,
        height: '120%',
        backgroundSize: '100%',
        backgroundImage: `url(${require('../img/bg/4_bgr.svg')})`,
        backgroundPosition: 'bottom center',
    },
    bgFeatures: {
        backgroundColor: '#d8e7fc',
        top: 'calc(50% - 24px)',
        [theme.mixins.atMedia('md')]: {
            backgroundColor: 'unset',
            minWidth: 2500,
            transform: 'translate(-50%, -50%)',
            backgroundRepeat: 'no-repeat',
            height: '140%',
            backgroundSize: '100%',
            backgroundImage: `url(${require('../img/bg/5_bgr.svg')})`,
        },
    },
    bgSubscription: {
        backgroundColor: '#274676',
        [theme.mixins.atMedia('md')]: {
            backgroundColor: 'unset',
            minWidth: 2500,
            transform: 'translate(-50%, -50%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '150%',
            backgroundSize: '100%',
            backgroundImage: `url(${require('../img/bg/6_bgr.svg')})`,
        },
    },

    backgroundColor: {
        background: theme.palette.gray[50]
    },
    backgroundGradient: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
    },

})