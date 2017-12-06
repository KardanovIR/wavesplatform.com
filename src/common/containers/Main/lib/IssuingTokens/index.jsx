import React from 'react';


import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';


const IssuingTokens = () => (
    <Row centered>
        <Col xs={12} sm={8} md={6}>
            <Typography type="display2" align="center">
                <FormattedMessage
                    id="home.issuingTokens.title"
                    defaultMessage="Issue your own tokens"
                />
            </Typography>

            <Typography type="body2" align="center">
                <FormattedMessage
                    id="home.issuingTokens.text"
                    defaultMessage="Releasing tokens allows any business to implement their own internal digital currency, using blockchain for crowdfunding or to pay for goods and services within their projects. Companies can also use tokens to create voting systems and loyalty or discount programmes."
                />
            </Typography>

            <Typography type="muted" align="center">
                <FormattedMessage
                    id="feedback.companiesReleased"
                    defaultMessage="Companies that have released their own tokens on Waves:"
                />
            </Typography>
        </Col>
    </Row>

);


export default IssuingTokens;
