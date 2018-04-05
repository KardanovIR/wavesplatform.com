import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Typography from 'src/common/components/Typography';
import { FormattedMessage } from 'react-intl';
import Button from 'src/common/components/Button';
import { fileUrl } from 'src/common/utils/url/';
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
    title={
      <FormattedMessage
        id="smartContracts.title"
        defaultMessage="RIDE on Waves blockchain with smart contracts"
      />
    }
    titleType="displayCustom"
    text={
      <Typography type="body" alignMobile="center" align="center" inverted>
        <FormattedMessage
          id="smartContracts.description"
          defaultMessage="Scalable failsafe language to serve both basic account security cases and rich decentralized application."
        />
      </Typography>
    }
    inverted
    align="center"
    alignMobile="center"
    buttons={[
      <Button
        onClick={onDocumentationClick}
        key={1}
        href={fileUrl('docs/white_paper_waves_smart_contracts.pdf')}
        target="_blank"
        className={classes.button}
        secondary
      >
        <FormattedMessage
          id="smartContracts.cta.documentation"
          defaultMessage="Download Whitepaper"
        />
      </Button>,
    ]}
  />
);

export default injectSheet(styles)(SmartContractsMainScreen);
