import image from './img/image.svg';
import deloitteLogo from './img/deloitte_logo.svg';

// import placeholder from 'src/common/styles/placeholder';


const styles = theme => ({
    titleTextCtaWrapper: {
        marginBottom: theme.spacing.unit * 16
    },
    ctaButton: {
        display: 'none'
    },
    secondCtaButton: {
        marginLeft: -theme.spacing.unit * 2
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '60%',
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

        [theme.breakpoints.up('lg')]: {
            width: '180%',
            height: '180%',
            top: -80,
            left: -50
        },
    },

    deloitte: {
        textAlign: 'right',
        borderRight: `6px solid ${theme.palette.gray[300]}`,
        padding: theme.spacing.getSpacing(0.5, 5, 0, 0)
    },
    deloitteLogo: {
        display: 'inline-block',
        background: `url(${deloitteLogo}) no-repeat`,
        width: 136,
        height: 26,
        backgroundSize: '100%',
        marginBottom: theme.spacing.unit
    },


    // order
    titleTextCtaCol: {
        order: 1
    },
    numbersCol: {
        marginTop: theme.spacing.unit*6,
        order: 2
    },
    imageCol: {
        order: 3,
        marginBottom: theme.spacing.unit*4
    },
    deloitteCol: {
        order: 4,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: theme.spacing.unit*4
    },
    [theme.mixins.atMedia('md')]: {
        numbersCol: {
            order: 3
        },
        imageCol: {
            order: 2
        },
        ctaButton: {
            display: 'inline-block'
        },
        secondCtaButton: {
            margin: 0
        }
    },
    [theme.breakpoints.up('lg')]: {
        numbersCol: {
            marginTop: theme.spacing.unit*10,
        },
        titleTextCtaCol: {
            height: 560
        }
    }
})

export default styles;