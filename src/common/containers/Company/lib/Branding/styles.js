import flexCentered from 'src/common/styles/flexCentered';
import img1x from  './img/branding@1x.jpg';
import img2x from './img/branding@2x.jpg';

const bgStyle = theme => ({
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'contain',
   height: 589,
   backgroundPosition: 'center',

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
        backgrounImage: `url(${img1x})`,
        [theme.mixins.atMedia('md')]: {
            backgroundImage: `url(${img2x})`,
        }
    },
    bgRow:{
        height: 589,
    }
})

export default styles;