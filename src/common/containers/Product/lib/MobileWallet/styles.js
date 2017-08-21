// import mockup from './img/mockup.png';
import placeholder from 'src/common/styles/placeholder';


const styles = theme => ({
    root: {
        // paddingTop: theme.spacing.unit * 10
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

        // background: `url(${mockup}) no-repeat`,
        backgroundSize: '100%',
        transform: 'rotate(-6deg)',
        marginBottom: theme.spacing.unit * 2
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    }
})

export default styles;