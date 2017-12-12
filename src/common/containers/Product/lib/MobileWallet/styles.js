import mobileWallet from './img/mobile_wallet.png';


const styles = theme => ({
    imageWrapper: {
        position: 'relative',
        paddingTop: '98%',
        overflow: 'visible',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
        top: 0,

        background: `url(${mobileWallet}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.breakpoints.up('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    },
    [theme.breakpoints.up('lg')]: {
        imageCol: {
            height: 0,
            overflow: 'visible'
        },
        image: {
            top: '-60%'
            // bottom: '80%'
        },
    }
})

export default styles;