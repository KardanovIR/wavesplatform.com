import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';

import Step from './Step';

import injectSheet from 'react-jss';
import styles from './styles';

const HowToBlock = ({ classes, title, steps, quote, inverted }) => (
  <Row className={classes.root}>
    {title && (
      <Col xs={12}>
        <Typography
          inverted={inverted}
          className={classes.title}
          type="display3Inverted"
        >
          {title}
        </Typography>
      </Col>
    )}
    {steps.map((step, index) => (
      <Col key={`step_${index}`} xs={12} sm={4} className={classes.column}>
        <div bottom={3} className={classes.columnContent}>
          <Step inverted={inverted} avatar={step.avatar}>
            {step.text}
          </Step>
        </div>
      </Col>
    ))}
    {quote && (
      <Col xs={12}>
        <Margin bottom={3}>
          <Row centered>
            <Col xs={12} md={10}>
              <Typography
                inverted={inverted}
                className={classes.quote}
                type="quote"
              >
                {quote}
              </Typography>
            </Col>
          </Row>
        </Margin>
      </Col>
    )}
  </Row>
);

export default injectSheet(styles)(HowToBlock);
