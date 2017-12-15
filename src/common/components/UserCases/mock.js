//@todo locale
const SLIDES_DATA = [
  {
    userName: 'The Crypto-Centric Mobile Gaming Platform and Store',
    title: 'MobileGo becomes largest blockchain crowdsale in history!',
    text:
      'MobileGo aims to bring the advantages of cryptocurrency to the gaming industry. The project, which raised $53 million at its crowdfund, is creating a community of gamers and developers around the GStore — an open platform on which all games are purchased for the gamecredits cryptocurrency, via a seamless integration with the GWallet. MobileGo will also use smart contracts to power peer-to-peer e-sports tournaments.',
    signature: 'MobileGo Team',
    bg: require('./img/slide.jpg'),
    bgMobile: require('./img/slide0mobile.jpg'),
    logoSrc: require('!svg-url-loader?noquotes!./img/logo.svg'),
    logoSrcLight: require('!svg-url-loader?noquotes!./img/logoWhite.svg'),
  },
  {
    userName: 'Worldwide coworking spaces for Tech Community',
    title: 'Primalbase raised over 3000 BTC during crowdsale',
    text:
      'We are very grateful to all who participated early and provided strong support to the project. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools.',
    signature: 'Primalbase Team',
    bg: require('./img/slide1.jpg'),
    bgMobile: require('./img/slide1Mobile.jpg'),
    logoSrc: require('./img/logo2.png'),
    logoSrcSet: `${require('./img/logo2.png')} 1x, ${require('./img/logo2@2x.png')} 2x`
  },
];

export default SLIDES_DATA;
