import flexCentered from 'src/common/styles/flexCentered';
import img1x from  './img/branding@1x.jpg';
import img2x from './img/branding@2x.jpg';

const bgStyle = theme => ({
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'contain',
   backgroundPosition: 'center',
    padding: theme.spacing.getSpacing(10, 0, 32, 0),
});

const styles = theme => ({
    root: {
    },
    media: {
        ...flexCentered,
        //marginBottom: theme.spacing.unit * 3,
        height: 180
    },
    logo: {
        maxWidth: '80%',
        height: 'auto'
    },
    link: {
        display: 'block',
        border: '1px solid #d6d6d6',
        marginRight: -1,
        marginBottom: -1,
        opacity: 0.6,
        transition: theme.transitions.create('opacity'),
        '&:hover': {
            opacity: 1
        }
    },
    contactUs: {
        textAlign: 'left'
    },
    bg: {
        ...bgStyle(theme),
        backgroundImage: `url(${img1x})`,
        [theme.mixins.atMedia('md')]: {
            backgroundImage: `url(${img2x})`,
        }
    },
    bgRow:{
        padding: theme.spacing.getSpacing(10, 0, 14, 0),
    }
})

export default styles;