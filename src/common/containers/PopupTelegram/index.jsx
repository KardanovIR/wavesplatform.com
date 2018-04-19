import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'ramda';
import pt from 'prop-types';
import View from 'src/common/components/PopupTelegram';
import { withLocalStorage } from 'src/public/hoc/localStorage';

import { joinTelegramClick, closeTelegramClick } from 'src/public/actions';
import { withLocaleCookie } from 'src/public/hoc/withLocaleCookie';
import { pathOr } from 'ramda';

const TELEGRAM_LINKS = {
  en: 'https://t.me/Wavescommunity',
  ko: 'https://t.me/WavesKR',
  ru: 'https://t.me/WavesCommunityRU',
  zh: 'https://t.me/waveschina',
};

const configAnalyticsHoc = connect(undefined, (dispatch, { page }) => ({
  onTelegramClick: () => dispatch(joinTelegramClick({ page })),
  onCloseClick: () => dispatch(closeTelegramClick({ page })),
}));
const noop = _ => _;
const containerHoc = Component => {
  @withLocalStorage('telegramPopup')
  @withLocaleCookie
  class Container extends React.Component {
    static propTypes = {
      onTelegramClick: pt.func,
      onCloseClick: pt.func,
      getLocale: pt.func,
      onLocalStorageUpdate: pt.func,
      initialValue: pt.string,
    };

    static defaultProps = {
      onTelegramClick: noop,
      onCloseClick: noop,
      getLocale: noop,
      onLocalStorageUpdate: noop,
    };

    constructor(props, ...etc) {
      super(props, ...etc);
      this.state = {
        opened: props.initialValue !== 'shown',
      };
    }

    handlePopupClose = () => {
      const { onCloseClick, onLocalStorageUpdate } = this.props;

      onCloseClick();
      onLocalStorageUpdate('shown');
      this.setState({ opened: false });
    };

    handleTelegramClick = () => this.props.onTelegramClick();

    getTelegramHref = () =>
      pathOr(TELEGRAM_LINKS['en'], [this.props.getLocale()], TELEGRAM_LINKS);

    render() {
      return (
        <Component
          onClose={this.handlePopupClose}
          opened={this.state.opened}
          onTelegramClick={this.handleTelegramClick}
          telegramHref={this.getTelegramHref()}
          {...this.props}
        />
      );
    }
  }
  return Container;
};

export default compose(configAnalyticsHoc, containerHoc)(View);
