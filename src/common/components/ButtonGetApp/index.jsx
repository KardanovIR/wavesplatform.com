import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from 'src/common/components/Icon';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  button: {
    padding: [3, theme.spacing.unit * 4, 0, theme.spacing.unit * 2]
  },
  text: {
    ...theme.typography.button,
    lineHeight: 1.3,
    textTransform: 'none',
    fontSize: 14
  },
  [theme.mixins.atMedia('md')]: {
    button: {
      padding: [3, theme.spacing.unit * 5, 0, theme.spacing.unit * 3]
    },
  },
});

const APP_STORE_HREF = 'https://itunes.apple.com/us/app/waves-wallet/id1233158971?mt=8';
const GOOGLE_PLAY_HREF = 'https://play.google.com/store/apps/details?id=com.wavesplatform.wallet';

const ButtonGetApp = ({ classes, className, type, ...rest }) => (
  <Button
    icon={
      type === 'google-play' ? (
        <Icon size={28} name="googlePlay" />
      ) : (
        <Icon size={32} name="apple" />
      )
    }
    className={cn(classes.button, className)}
    href={type === 'google-play' ? GOOGLE_PLAY_HREF : APP_STORE_HREF}
    target="_blank"
    {...rest}
  >
    <span className={classes.text}>
      Get it on
      <br />
      {type === 'google-play' ? 'Google Play' : 'APP STORE'}
    </span>
  </Button>
);

ButtonGetApp.PropTypes = {
  type: PropTypes.oneOf(['app-store', 'google-play']).isRequired,
};

export default injectSheet(styles)(ButtonGetApp);
