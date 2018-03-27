import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Typography from 'src/common/components/Typography';
import { FormattedMessage } from 'react-intl';
import IconButton from 'src/common/components/Button/Icon';

import injectSheet from 'react-jss';

const styles = theme => ({
  downloadButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

const DexMainScreen = ({ classes }) => (
  <MainScreen
    title={<FormattedMessage id="smartContracts.title" />}
    titleType="displayCustom"
    text={
      <Typography type="body" alignMobile="center" align="center" inverted>
        <FormattedMessage id="smartContracts.description" />
      </Typography>
    }
    inverted
    align="center"
    alignMobile="center"
    buttons={[
      <IconButton
        key={1}
        href="https://github.com/wavesplatform/WavesGUI"
        target="_blank"
        iconName="github"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="developers.cta.documentation" />
      </IconButton>,
    ]}
  />
);

export default injectSheet(styles)(DexMainScreen);
