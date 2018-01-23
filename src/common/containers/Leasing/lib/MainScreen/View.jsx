import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

import Typography from 'src/common/components/Typography';
import injectSheet from 'react-jss';
import Button from 'src/common/components/Button';


import url from 'src/common/utils/url';
import styles from './styles';

const LeasingMainScreen = ({ classes, onGetClientClick, onNewClientClick }) => (
  <MainScreen
    title={
      <Typography className={classes.Title} inverted>
        <FormattedMessage
          id="leasing.title"
          defaultMessage="Use your WAVES balance to generate income"
        />
      </Typography>
    }
    text={
      <Typography className={classes.description} inverted>
        <FormattedMessage
          id="leasing.text"
          defaultMessage="By helping secure the Waves blockchain you can earn up to 5% per year on your WAVES balance. Simply lease your WAVES to a mining pool and you will receive a share of transaction fees in proportion to the amount you commit. "
        />
      </Typography>
    }
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href={url('online-client')}
        bordered
        inverted
      >
        <FormattedMessage id="cta.onlineClientOld" />
      </Button>,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        withLoader
        secondary
        inverted
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(LeasingMainScreen);
