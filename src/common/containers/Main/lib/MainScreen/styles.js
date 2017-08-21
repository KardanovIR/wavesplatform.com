import mockup from './img/mockup.png';
import deloitteLogo from './img/deloitte_logo.svg';

// import placeholder from 'src/common/styles/placeholder';


const styles = theme => ({
    titleTextCtaWrapper: {
        marginBottom: theme.spacing.unit * 16
    },
    primaryButton: {
        display: 'none'
    },
    secondaryButton: {
        marginLeft: -theme.spacing.unit * 2
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '75%',
        overflow: 'visible',
        // ...placeholder,
    },
    image: {
        width: '90%',
        height: '115%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        right: -100,

        background: `url(${mockup}) no-repeat`,
        backgroundSize: '100%',
        transform: 'rotate(-6deg)',
        marginBottom: theme.spacing.unit * 2
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
        primaryButton: {
            display: 'inline-block'
        },
        secondaryButton: {
            margin: 0
        }
    }
})

export default styles;