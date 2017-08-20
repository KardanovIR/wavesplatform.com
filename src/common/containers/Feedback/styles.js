import bgImage from 'src/common/styles/bgImage';
import primalbaseAvatar from './img/primalbase_avatar.svg';
import mobileGoAvatar from './img/mobile_go_avatar.svg';
import mobileGoLogo from './img/mobile_go_logo.svg';


const styles = theme => ({
    primalbaseAva: {
        ...bgImage,
        height: '100%',
        backgroundImage: `url(${primalbaseAvatar})`
    },
    mobileGoAva: {
        ...bgImage,
        height: '100%',
        backgroundImage: `url(${mobileGoAvatar})`
    },
    mobileGoLogo: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
        width: 214,
        height: 37,
        backgroundImage: `url(${mobileGoLogo})`
    },
    // [theme.mixins.atMedia('lg')]: {
    //     imageCol: {
    //         paddingRight: theme.spacing.unit * 10
    //     }
    // }
})

export default styles;