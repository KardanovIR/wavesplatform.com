import React from 'react';
import { FormattedMessage } from 'react-intl';

const SLIDES_DATA = [
  {
    userName: <FormattedMessage id="userCases.1.userName" defaultMessage="The Crypto-Centric Mobile Gaming Platform and Store" />,
    title: <FormattedMessage id="userCases.1.title" defaultMessage="MobileGo becomes largest blockchain crowdsale in history!" />,
    text: <FormattedMessage id="userCases.1.text" defaultMessage="MobileGo aims to bring the advantages of cryptocurrency to the gaming industry. The project, which raised $53 million at its crowdfund, is creating a community of gamers and developers around the GStore — an open platform on which all games are purchased for the gamecredits cryptocurrency, via a seamless integration with the GWallet. MobileGo will also use smart contracts to power peer-to-peer e-sports tournaments." />,
    signature: <FormattedMessage id="userCases.1.signature" defaultMessage="MobileGo Team" />,
    bg: require('./img/slide.jpg'),
    bgMobile: require('./img/slide0mobile.jpg'),
    logoSrc: require('!svg-url-loader?noquotes!./img/logo.svg'),
    logoSrcLight: require('!svg-url-loader?noquotes!./img/logoWhite.svg'),
  },
  {
    userName: <FormattedMessage id="userCases.2.userName" defaultMessage="Worldwide coworking spaces for Tech Community" />,
    title: <FormattedMessage id="userCases.2.title" defaultMessage="Primalbase raised over 3000 BTC during crowdsale" />,
    text: <FormattedMessage id="userCases.2.text" defaultMessage="We are very grateful to all who participated early and provided strong support to the project. Thanks to this and efforts of new executive team we managed to achieve a great deal of positive developments. We are about to open our new offices in Amsterdam and Berlin, and launch a number of supporting digital tools." />,
    signature: <FormattedMessage id="userCases.2.signature" defaultMessage="Primalbase Team" />,
    bg: require('./img/slide1.jpg'),
    bgMobile: require('./img/slide1Mobile.jpg'),
    logoSrc: require('./img/logo2.png'),
    logoSrcSet: `${require('./img/logo2.png')} 1x, ${require('./img/logo2@2x.png')} 2x`
  },
];

export default SLIDES_DATA;
