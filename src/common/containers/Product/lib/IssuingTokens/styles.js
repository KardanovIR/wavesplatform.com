import token from './img/token.svg';


const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 10
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '71%',
        overflow: 'visible',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,

        background: `url(${token}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.mixins.atMedia('md')]: {
        title: {
            textAlign: 'center',
        },
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        },
        image: {
            width: '120%',
            height: '120%',
        }
    }
})

export default styles;