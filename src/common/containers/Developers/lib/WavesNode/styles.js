import mockup from './img/mockup.png';

import placeholder from 'src/common/styles/placeholder';



const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(0, 0, 5)
    },
    imageWrapper: {
        position: 'relative',
        overflow: 'visible',
        paddingTop: '90%',
        ...placeholder
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: -100,

        width: '90%',
        paddingTop: '75%',

        background: `url(${mockup}) no-repeat`,
        backgroundSize: '100%',
        transform: 'rotate(-6deg)',
        marginBottom: theme.spacing.unit * 2
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block'
        }
    }
})

export default styles;