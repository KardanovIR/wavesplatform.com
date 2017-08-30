import image from './img/image.svg';


const styles = theme => ({
    root: {
        flexDirection: 'row-reverse'
    },
    title: {
        marginBottom: theme.spacing.unit * 4
    },
    article: {
        marginBottom: theme.spacing.unit * 4
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
    },
    [theme.mixins.atMedia('sm')]: {
        image: {
            width: '200%',
            height: '200%',
            top: -80,
        }
    },
    [theme.mixins.atMedia('md')]: {
        image: {
            width: '180%',
            height: '180%',
            top: -150,
            left: -10
        }
    },
    [theme.mixins.atMedia('lg')]: {
        image: {
            top: -180,
            left: -30,
        }
    }
})

export default styles;