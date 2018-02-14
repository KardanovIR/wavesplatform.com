import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';
import Typography from 'src/common/components/Typography';
import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';
import injectSheet from 'react-jss';

const styles = theme => ({
  downloadButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

const WalletMainScreen = ({
  onDownloadChange,
  onOnlineClientClick,
  classes,
}) => (
  <MainScreen
    title={<FormattedMessage id="products.token.title" />}
    titleType="displayCustom"
    text={
      <Typography type="body" alignMobile="center" align="left">
        <FormattedMessage id="products.token.description" />
      </Typography>
    }
    align="left"
    alignMobile="center"
    buttons={[
      <DownloadClientDropdown
        key="main_cta_button1"
        onChange={onDownloadChange}
        containerClassName={classes.downloadButton}
      />,
      <Button
        onClick={onOnlineClientClick}
        bordered
        key="main_cta_button2"
        target="_blank"
        href={url('online-client(beta)')}
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(WalletMainScreen);
