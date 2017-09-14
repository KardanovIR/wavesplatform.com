import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';



const Facts = ({
    classes,
    tokens
}) => (
        <Row centered className={classes.row}>
            <Col xs={12} sm={5} className={classes.withMargin}>
                <Typography type="display1" className={classes.fact}>
                    <FormattedMessage
                        id="facts.tokens"
                        defaultMessage="A total of {number} tokens have been released on Waves"
                        values={{ number: <FormattedNumber value={tokens} /> }}
                    />
                </Typography>
            </Col>
            <Col xs={12} sm={5} smOffset={2}>
                <Typography type="display1" className={classes.fact}>
                    <FormattedMessage
                        id="facts.capitalisation"
                        defaultMessage="Totaling a market capitalisation of more than ${cap}"
                        values={{ cap: <FormattedNumber value={1000000000} /> }}
                    />
                </Typography>
            </Col>
        </Row>
    );


export default injectSheet(styles)(Facts);