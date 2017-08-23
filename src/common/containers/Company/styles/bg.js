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
        backgroundImage: `url(${require('../img/main_bgr.svg')})`,
        backgroundSize: 'cover',
        top: -100,
        [theme.mixins.atMedia('md')]: {
            backgroundPosition: 'top center',
            top: -200,
            height: 'calc(900px - 20vw)',
        },
        [theme.mixins.atMedia('lg')]: {
            top: -230,
            height: 'calc(1100px - 30vw)',
            minHeight: 650
        }
    },
    bgWhitepaper: {
        background: theme.palette.gray[50]
    },
    bgCareers: {
        background: '#233556'
    },
})