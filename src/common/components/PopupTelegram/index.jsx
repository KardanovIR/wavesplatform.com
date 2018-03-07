import Popup from '../Popup';
import React from 'react';
import injectSheet from 'react-jss';
import Typography from 'src/common/components/Typography';
import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import pt from 'prop-types';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { withLocalStorage } from 'src/public/hoc/localStorage';

const styles = theme => ({
  textContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inner: {
    width: 800,
    height: 400,
    backgroundImage: `url(${require('./bg.jpg')})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
  },
  // closeButton: {
  //   display: 'none',
  // },
  textOuter: { position: 'relative' },
  text: {
    width: '100%',
    height: '100%',
    display: 'inherit',
  },

  innerText: {
    width: '50%',
    paddingLeft: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    boxSizing: 'border-box',
  },
});
import { joinTelegramClick } from 'src/public/actions';
import { withLocaleCookie } from 'src/public/hoc/withLocaleCookie';
import { pathOr } from 'ramda';

const configAnalyticsHoc = logSettings =>
  connect(undefined, {
    onTelegramClick: () => joinTelegramClick(logSettings),
  });

const containerHoc = Component => {
  const TELEGRAM_LINKS = {
    en: 'https://t.me/Wavescommunity',
    ko: 'https://t.me/WavesKR',
  };
  @withLocalStorage('telegramPopup')
  @withLocaleCookie
  class Container extends React.Component {
    static propTypes = {
      onTelegramClick: pt.func,
      getLocale: pt.func,
      currentValue: pt.string,
    };
    static defaultProps = {
      onTelegramClick: _ => _,
      getLocale: _ => _,
    };
    handlePopupClose = () => this.props.onLocalStorageUpdate('shown');
    handleTelegramClick = () => this.props.onTelegramClick();
    getTelegramHref = () =>
      pathOr('', [this.props.getLocale()], TELEGRAM_LINKS);
    render() {
      return (
        <Component
          onClose={this.handlePopupClose}
          opened={this.props.currentValue !== 'shown'}
          onTelegramClick={this.handleTelegramClick}
          telegramHref={this.getTelegramHref()}
          {...this.props}
        />
      );
    }
  }
  return Container;
};
const stylesBg = {
  bg: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
    height: '100%',
    width: 'auto',
  },
};
const Background = injectSheet(stylesBg)(({ classes }) => (
  <img
    className={classes.bg}
    srcSet={`${require('./bg.jpg')} 1x, ${require('./bg@2x.jpg')} 2x`}
  />
));

const View = ({ classes, onClose, opened, onTelegramClick, telegramHref }) => (
  <Popup show={opened} classes={classes} inverted onClose={onClose}>
    <div className={classes.inner}>
      <div className={classes.innerText}>
        <Background />
        <Typography type="display3" tagName="div" cut inverted weight={700}>
          Join our Telegram channel
        </Typography>
        <Typography type="body" inverted weight={400}>
          Get the latest Waves news!
        </Typography>
        <Margin bottom={3} />
        <Button
          onClick={onTelegramClick}
          href={telegramHref}
          key="main_cta_button2"
          target="_blank"
          inverted
        >
          Join channel
        </Button>
      </div>
    </div>
  </Popup>
);

const logSettings = { page: 'Home' };

export default compose(
  configAnalyticsHoc(logSettings),
  containerHoc,
  injectSheet(styles)
)(View);
