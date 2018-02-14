import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';

const styles = theme => ({
  downloadButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});
const ProductMainScreen = ({
  onDownloadChange,
  onOnlineClientClick,
  classes,
}) => (
  <MainScreen
    title={<FormattedHTMLMessage id="product.title" />}
    text={<FormattedMessage id="product.text" />}
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

export default injectSheet(styles)(ProductMainScreen);
