import React from 'react';


import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';



const IssuingTokens = () => (
    <Row centered>
        <Col xs={12} sm={8} md={6}>
            <Typography type="display2" align="center">
                Issuing your tokens
            </Typography>

            <Typography type="body2" align="center">
                Releasing tokens allows any business to use their own internal digital currency, using blockchain to pay for goods and services within their projects.
            </Typography>

            <Margin />

            <Typography type="quote" align="center" color="gray-500">
                Companies that have released their own tokens on Waves:
            </Typography>
        </Col>
    </Row>

);


export default IssuingTokens;