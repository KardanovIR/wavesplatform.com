import React from 'react';
import PropTypes from 'prop-types';

import { FormattedHTMLMessage } from 'react-intl';
import Button from '../Button';
import Icon from 'src/common/components/Icon';
import { fileUrl } from 'src/common/utils/url';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  button: {
    padding: [0, theme.spacing.unit * 4, 0, theme.spacing.unit * 2],
  },
  text: {
    ...theme.typography.button,
    lineHeight: 1.3,
    textTransform: 'none',
    fontSize: 14,
  },
  [theme.mixins.atMedia('md')]: {
    button: {
      padding: [0, theme.spacing.unit * 5, 0, theme.spacing.unit * 3],
    },
  }
});

const APP_STORE_HREF = {
    store: 'https://itunes.apple.com/us/app/waves-wallet/id1233158971?mt=8',
    link: null
};
const GOOGLE_PLAY_HREF = {
    store: 'https://play.google.com/store/apps/details?id=com.wavesplatform.wallet',
    link: fileUrl('WavesWallet_release_2.1.1.apk'),
};


const AppIcon = ({ type, fromFile}) => (
    type === 'google-play' ? (
        <Icon size={28} name={fromFile ? "googleAndroid" : "googlePlay"}/>
    ) : (
        <Icon size={32} name={fromFile ? "appleLogo" : "apple"}/>
    )
);

const getButtonProps = ({fromFile, type, onClick}) => ({
    href: (type === 'google-play' ? GOOGLE_PLAY_HREF : APP_STORE_HREF)[fromFile ? 'link' : 'store'],
    target: "_blank",
    grey: type === 'app-store' && fromFile,
    disabled: type === 'app-store' && fromFile,
    icon: <AppIcon fromFile={fromFile} type={type}/>,
    onClick: () => onClick(fromFile ? 'mobile_client_download' : 'mobile_client')
});

const ButtonGetApp = ({ classes, className, type, fromFile, onClick, ...rest }) => (
  <Button
      className={cn(classes.button, className)}
      {...{...rest, ...getButtonProps({ type, fromFile, onClick })}}
  >
    <span className={classes.text}>
      {type === 'google-play' ? (
          <FormattedHTMLMessage id={
            fromFile ? "components.buttonGetApp.title.androidLink" : "components.buttonGetApp.title.android"
          }/>
      ) : (
          <FormattedHTMLMessage id={
            fromFile ? "components.buttonGetApp.title.iosLink" : "components.buttonGetApp.title.ios"
          }/>
      )}
    </span>
  </Button>
);

ButtonGetApp.propTypes = {
  type: PropTypes.oneOf(['app-store', 'google-play']).isRequired,
};

export default injectSheet(styles)(ButtonGetApp);
