import React from 'react';

import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

const Audience = ({ classes }) => (
  <Row>
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage id="home.audience.developers.title">
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
        }
        text={<FormattedMessage id="home.audience.developers.text" />}
      />
      <Margin bottom={3} />
    </Col>
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage
            className={classes.title}
            id="home.audience.traders.title"
          >
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
        }
        text={<FormattedMessage id="home.audience.traders.text" />}
      />
      <Margin bottom={3} />
    </Col>
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage
            className={classes.title}
            id="home.audience.organisations.title"
          >
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
        }
        text={<FormattedMessage id="home.audience.organisations.text" />}
      />
      <Margin bottom={3} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Audience);
