import React from 'react';
import { FormattedMessage } from 'react-intl';

const SLIDES_DATA = [
  {
    userName: <FormattedMessage id="userCases.1.userName" />,
    title: <FormattedMessage id="userCases.1.title" />,
    text: <FormattedMessage id="userCases.1.text" />,
    signature: <FormattedMessage id="userCases.1.signature" />,
    bg: require('./img/slide.jpg'),
    bgMobile: require('./img/slide0mobile.jpg'),
    logoSrc: require('!svg-url-loader?noquotes!./img/logo.svg'),
    logoSrcLight: require('!svg-url-loader?noquotes!./img/logoWhite.svg'),
  },
  {
    userName: <FormattedMessage id="userCases.2.userName" />,
    title: <FormattedMessage id="userCases.2.title" />,
    text: <FormattedMessage id="userCases.2.text" />,
    signature: <FormattedMessage id="userCases.2.signature" />,
    bg: require('./img/slide1.jpg'),
    bgMobile: require('./img/slide1Mobile.jpg'),
    logoSrc: require('./img/logo2.png'),
    logoSrcSet: `${require('./img/logo2.png')} 1x, ${require('./img/logo2@2x.png')} 2x`,
  },
];

export default SLIDES_DATA;
