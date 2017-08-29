import image from './img/image.svg';


const styles = theme => ({
    imageWrapper: {
        position: 'relative',
        overflow: 'visible',
        paddingTop: '74%',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        top: -20,
        left: 0,
        background: `url(${image}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        image: {
            top: -40,
            right: 20,
            left: 'unset',
            width: '140%',
            height: '140%',
        }
    },
    [theme.breakpoints.up('md')]: {
        image: {
            top: -70,
            right: 60,
        }
    },
})

export default styles;