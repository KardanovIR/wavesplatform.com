import React from 'react';
import { FormattedMessage } from 'react-intl';
import url from 'src/common/utils/url';

import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';
import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';
import injectSheet from 'react-jss';

const styles = theme => ({
  downloadButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

const GetWavesMainScreen = ({
  onNewClientClick,
  onDropdownChange,
  classes,
}) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title" />}
    buttons={[
      <DownloadClientDropdown
        key="main_cta_button1"
        onChange={onDropdownChange}
        containerClassName={classes.downloadButton}
      />,

      <Button
        onClick={onNewClientClick}
				href={url('online-client(beta)')}
				target="_blank"
        key="main_cta_button2"
        bordered
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(GetWavesMainScreen);
