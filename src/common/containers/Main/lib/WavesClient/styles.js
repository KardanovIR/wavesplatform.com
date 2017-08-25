import image from './img/image.svg';


const styles = theme => ({
    imageWrapper: {
        position: 'relative',
        overflow: 'visible',
        paddingTop: '74%',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        top: -80,
        right: 60,

        width: '140%',
        height: '140%',

        background: `url(${image}) no-repeat`,
        backgroundSize: '100%',
    }
})

export default styles;