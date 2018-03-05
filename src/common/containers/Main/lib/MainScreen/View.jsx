import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

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
const IndexMainScreen = ({ onNewClientClick, onDownloadChange, classes }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="home.main.title" />}
    text={<FormattedMessage id="home.main.text" />}
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
				target="_blank"
        bordered
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(IndexMainScreen);
