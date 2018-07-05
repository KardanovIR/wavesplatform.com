import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import Typography from 'src/common/components/Typography';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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

const DexMainScreen = ({ onNewDexClick }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="products.dex.title" />}
    titleType="displayCustom"
    text={
      <Typography type="body" alignMobile="center" align="center" inverted>
        <FormattedMessage id="products.dex.description" />
      </Typography>
    }
    inverted
    align="center"
    alignMobile="center"
    buttons={[
      <Button
        secondary
        onClick={onNewDexClick}
        key="main_cta_button"
        target="_blank"
        href={url('dex-demo')}
      >
        <FormattedMessage id="cta.newDex" defaultMessage="Exchange" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(DexMainScreen);
