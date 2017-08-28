import image from './img/image.svg';


const styles = theme => ({
    ctaButton: {
        display: 'none'
    },
    secondCtaButton: {
        marginLeft: -theme.spacing.unit * 2
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '70%',
        overflow: 'visible',
    },
    image: {
        width: '100%',
        height: '100%',

        position: 'absolute',
        zIndex: -1,

        top: 0,
        left: 0,

        background: `url(${image}) no-repeat`,
        backgroundSize: '100%',

        // bg for displays
        [theme.breakpoints.up('lg')]: {
            width: '140%',
            height: '140%',
            top: -60,
            left: 0
        },
        [theme.breakpoints.up('lg')]: {
            width: '140%',
            height: '140%',
            top: -60,
            left: 0
        },
    },

    [theme.mixins.atMedia('md')]: {
        ctaButton: {
            display: 'inline-block'
        },
        secondCtaButton: {
            margin: 0
        }
    },

    [theme.breakpoints.up('lg')]: {
        titleTextCtaCol: {
            height: 560
        }
    }
})

export default styles;