import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

import Typography from 'src/common/components/Typography';
import injectSheet from 'react-jss';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

import url from 'src/common/utils/url';
import styles from './styles';

const LeasingMainScreen = ({ classes, onDownloadChange, onNewClientClick }) => (
  <MainScreen
    title={
      <Typography
        className={classes.Title}
        inverted
        align="center"
        alignMobile="center"
      >
        <FormattedMessage
          id="leasing.title"
          defaultMessage="Use your WAVES balance to generate income"
        />
      </Typography>
    }
    text={
      <Typography
        className={classes.description}
        inverted
        align="center"
        alignMobile="center"
      >
        <FormattedMessage
          id="leasing.text"
          defaultMessage="By helping secure the Waves blockchain you can earn up to 5% per year on your WAVES balance. Simply lease your WAVES to a mining pool and you will receive a share of transaction fees in proportion to the amount you commit. "
        />
      </Typography>
    }
    buttons={[
      <DownloadClientDropdown
        key="main_cta_button1"
        onChange={onDownloadChange}
        containerClassName={classes.downloadButton}
      />,

      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        bordered
        inverted
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(LeasingMainScreen);
