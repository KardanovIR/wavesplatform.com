import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Description = () => (
  <Row>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.algorithm.title"
            
          />
        }
        text={
          <FormattedMessage
            id="developers.description.algorithm.text"
            
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.network.title"
            
          />
        }
        text={
          <FormattedMessage
            id="developers.description.network.text"
            
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.fees.title"
            
          />
        }
        text={
          <FormattedMessage
            id="developers.description.fees.text"
            
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.transactions.title"
            
          />
        }
        text={
          <FormattedMessage
            id="developers.description.transactions.text"
            
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Description);
