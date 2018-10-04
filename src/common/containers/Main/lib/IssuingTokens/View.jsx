import React from 'react';
import { compose } from 'ramda';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage, injectIntl, FormattedPlural } from 'react-intl';

const IssuingTokens = ({ classes, tokensIssued }) => (
  <Row>
    <Col xs={12} md={11}>
      <Typography type="display1">
        <FormattedMessage id="home.issuingTokens.title" />
      </Typography>

      <Typography type="display3" className={classes.text}>
        <FormattedPlural
          value={tokensIssued}
          one={
            <FormattedMessage
              id="home.issuingTokens.text.one"
              values={{ tokensIssued }}
            />
          }
          few={
            <FormattedMessage
              id="home.issuingTokens.text.few"
              values={{ tokensIssued }}
            />
          }
          other={
            <FormattedMessage
              id="home.issuingTokens.text.other"
              values={{ tokensIssued }}
            />
          }
        />
      </Typography>
    </Col>
  </Row>
);

export default compose(
  injectIntl,
  injectSheet(styles)
)(IssuingTokens);
