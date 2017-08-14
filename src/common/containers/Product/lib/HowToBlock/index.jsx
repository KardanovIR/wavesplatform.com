import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';

import Step from './Step';

import injectSheet from 'react-jss';
import styles from './styles';




const HowToBlock = ({
    classes,
    title,
    steps,
    quote
}) => (
    <Row className={classes.root}>
        <Col xs={12}>
            <Typography className={classes.title} type="display2">{ title }</Typography>
            <Margin bottom={3} />
        </Col>
        { steps.map((step, index) => (
            <Col key={`step_${index}`} xs={12} md={4} className={classes.column}>
            <Margin bottom={3} className={classes.columnContent}>
                <Step avatar={ step.avatar }>
                    { step.text }
                </Step>
            </Margin>
        </Col>
        )) }
        { quote && (
            <Col xs={12}>
                <Margin bottom={3}>
                    <Typography className={classes.quote} type="quote" color="gray-500">
                        { quote }
                    </Typography>
                </Margin>
            </Col>
        ) }
        
    </Row>
);


export default injectSheet(styles)(HowToBlock);