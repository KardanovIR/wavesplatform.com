import image from './img/image.svg';


const styles = theme => ({
    // widthSetter: {
    //     height: 0,
    //     overflow: 'visible',
    //     width: '100%',
    // },
    imageCol: {
        margin: [theme.spacing.unit*4, 0, theme.spacing.unit*2]
    },
    imageWrapper: {
        position: 'relative',
        overflow: 'visible',
        paddingTop: '53.42%',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: `url(${image}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        imageCol: {
            margin: 0
        },
        image: {
            top: -50,
            right: 0,
            left: 'unset',
            width: '140%',
            height: '140%',
        }
    },
    [theme.breakpoints.up('md')]: {
        image: {
            top: -120,
            // right: 60,
            width: '160%',
            height: '160%',
            transform: 'rotate(-5deg)'
        }
    },
    [theme.breakpoints.up('lg')]: {
        image: {
            top: -150,
            width: '180%',
            height: '180%',
        }
    },
})

export default styles;