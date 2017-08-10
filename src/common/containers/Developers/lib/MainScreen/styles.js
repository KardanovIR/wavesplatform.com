import mockup from './img/mockup.png';
import deloitteLogo from './img/deloitte_logo.svg';

import placeholder from 'src/common/styles/placeholder';


const styles = theme => ({
    root: {
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
    // [theme.mixins.atMedia('md')]: {
    //     swappedToBottom: {
    //         order: 1,
    //         maring: 0
    //     },
    //     swappedToTop: {
    //         order: 0
    //     },
    //     secondaryButton: {
    //         display: 'inline-block'
    //     }
    // }
})

export default styles;