import React from 'react';

import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

import Image from '!svg-react-loader!./img/leasing_scheme.svg';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
const styles = ({ spacing, breakpoints }) => ({
  imageWrapper: {
    padding: [spacing.unit * 2, 0],
  },
  col: {
    display: 'flex',
    alignItems: 'left',
  },
  panel: {
    padding: 0,
  },
  [breakpoints.up('md')]: {
    textCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    panel: {
      padding: [spacing.unit * 4, 0],
    },
    imageWrapper: {
      width: '80%',
    },
  },
  [breakpoints.up('lg')]: {
    imageWrapper: {
      padding: 0,
    },
    panel: {
      paddingTop: spacing.unit * 8,
      paddingBottom: spacing.unit * 8,
    },
  },
});

const Description = ({ classes }) => (
  <div>
    <ContentContainer>
      <SectionTitleText
        marginSize={1}
        align="left"
        titleType="display1"
        titleWeight={600}
        title={
          <FormattedMessage
            id="leasing.description.title"
            defaultMessage="What is Waves leasing?"
          />
        }
        text={
          <FormattedMessage
            id="leasing.description.subtitle"
            defaultMessage="Leased proof-of-stake (LPoS) allows Waves holders to profit by using their balances to secure the network — whilst retaining full control of their funds."
          />
        }
      />
      <Margin bottom={4} />
      <Panel className={classes.panel}>
        <Row>
          <Col xs={12} sm={6} lg={4} lgOffset={1} className={classes.col}>
            <div className={classes.imageWrapper}>
              <Image />
              <Margin bottom={4} />
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={6}
            lgOffset={1}
            className={[classes.col, classes.textCol]}
          >
            <Typography type="body">
              <FormattedMessage
                id="leasing.description.text"
                defaultMessage="Custom tokens platform Waves has implemented balance leasing within its lite client, allowing every user to take part in securing the network and profit from transaction fees — without requiring any additional technical knowledge or the need to download the blockchain. Leased WAVES remain in the full control of the account holder, and can be transferred or exchanged at any point."
              />
            </Typography>
            <Margin bottom={4} xsOnly />
          </Col>
        </Row>
      </Panel>
    </ContentContainer>
  </div>
);

export default injectSheet(styles)(Description);
