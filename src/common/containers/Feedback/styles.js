import bgImage from 'src/common/styles/bgImage';
import primalbaseAvatar from './img/primalbase_avatar.svg';
import mobileGoAvatar from './img/mobile_go_avatar.svg';
import mobileGoLogo from './img/mobile_go_logo.svg';
import primalbaseLogo from './img/primalbase_logo.png';

const styles = theme => ({
  primalbaseAva: {
    ...bgImage,
    height: '100%',
    backgroundImage: `url(${primalbaseAvatar})`,
  },
  mobileGoAva: {
    ...bgImage,
    height: '100%',
    backgroundImage: `url(${mobileGoAvatar})`,
  },
  primalbaseLogo: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    backgroundSize: 'contain',
    width: 208,
    height: 34,
    backgroundImage: `url(${primalbaseLogo})`,
  },
  mobileGoLogo: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    width: 214,
    height: 37,
    backgroundImage: `url(${mobileGoLogo})`,
  },
  image: {
    width: '100%',
    display: 'block',
  },
});

export default styles;
