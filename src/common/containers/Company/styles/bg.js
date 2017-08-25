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
        backgroundPosition: 'top center',
        backgroundImage: `url(${require('../img/main_bgr.svg')})`,
        backgroundSize: '100%',
        width: 2560,
        top: -100,
        height: '175%',
        [theme.breakpoints.up('sm')]: {
            top: -200,
            height: 580,
        },
        [theme.breakpoints.up('md')]: {
            top: -200,
            height: 'calc(900px - 20vw)',
        },
        [theme.breakpoints.up('lg')]: {
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