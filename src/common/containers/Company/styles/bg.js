import img1x from '../lib/Branding/img/branding@1x.jpg';
import img2x from '../lib/Branding/img/branding@2x.jpg';

export default theme => ({
  bgLight: {
    background: theme.palette.gray[50],
  },
  bgDark: {
    background: '#233556',
  },
  bgBranding: {
    backgroundImage: `url(${img1x})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.mixins.atMedia('md')]: {
      backgroundImage: `url(${img2x})`,
    },
  },
});
