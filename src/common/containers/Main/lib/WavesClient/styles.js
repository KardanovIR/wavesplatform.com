import mockup from './img/mockup.png';


const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(20, 0, 15)
    },
    imageWrapper: {
        position: 'relative',
        overflow: 'visible',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        top: '-50%',
        left: -100,

        width: '90%',
        paddingTop: '75%',

        background: `url(${mockup}) no-repeat`,
        backgroundSize: '100%',
        transform: 'rotate(-6deg)',
        marginBottom: theme.spacing.unit * 2
    }
})

export default styles;