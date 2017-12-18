import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const DEX = ({ classes }) => (
  <div className={classes.root}>
    <Row className={classes.titleRow}>
      <Col xs={12} sm={7} md={7}>
        <Typography type="display5" tagName="div" className={classes.title} inverted>
          <FormattedMessage id="home.DEX.title"  />
        </Typography>
      </Col>
      <div className={classes.imageWrapper}>
        <img src={require('./img/dexmain@1x.jpg')} srcSet={`${require('./img/dexmain@1x.jpg')} 1x, ${require('./img/dexmain@2x.jpg')} 2x`} alt="" className={classes.image} />
      </div>
    </Row>
    <Row>
      <Col xs={12} sm={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.tradeNoLimits.title"
                
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.tradeNoLimits.text"
                
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} sm={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.tradeQuickly.title"
                
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.tradeQuickly.text"
                
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} sm={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.fees.title"
                
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.fees.text"
                
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} sm={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.safety.title"
                
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.safety.text"
                
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(DEX);
