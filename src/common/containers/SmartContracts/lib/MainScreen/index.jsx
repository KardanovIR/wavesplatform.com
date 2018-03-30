import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Typography from 'src/common/components/Typography';
import { FormattedMessage } from 'react-intl';
import Button from 'src/common/components/Button';

import injectSheet from 'react-jss';

const styles = theme => ({
  downloadButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

const SmartContractsMainScreen = ({ classes, onDocumentationClick }) => (
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
      <Button
        onClick={onDocumentationClick}
        key={1}
        href="#"
        target="_blank"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="smartContracts.cta.documentation" />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(SmartContractsMainScreen);
