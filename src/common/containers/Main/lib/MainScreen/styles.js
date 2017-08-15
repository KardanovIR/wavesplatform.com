import mockup from './img/mockup.png';
import deloitteLogo from './img/deloitte_logo.svg';

import placeholder from 'src/common/styles/placeholder';


const styles = theme => ({
    titleTextCtaWrapper: {
        marginBottom: theme.spacing.unit * 16
    },
    secondaryButton: {
        display: 'none'
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '75%',
        overflow: 'visible',
        ...placeholder,
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
    swappedToBottom: {
        marginBottom: theme.spacing.unit * 2
    },
    [theme.mixins.atMedia('md')]: {
        swappedToBottom: {
            order: 1,
            maring: 0
        },
        swappedToTop: {
            order: 0
        },
        secondaryButton: {
            display: 'inline-block'
        }
    }
})

export default styles;