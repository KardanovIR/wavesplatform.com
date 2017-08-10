import React from 'react';

import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import { Row, Col } from 'src/common/components/Grid';



const FriendlyAPI = () => (
    <Row>
        <Col xs={12} md={6}>
            <Typography type="display1" margin>
                Developer-Friendly API
            </Typography>
            <Typography type="body">
                Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically.
            </Typography>
            <Typography type="body">
                Our open source client application uses the same API; you can explore it and implement any kind of client application yourself.
            </Typography>
            <IconButton iconName="twitter">
                  Twitter
            </IconButton>
        </Col>
        <Col xs={12} md={6}>
        </Col>
    </Row>
);


export default FriendlyAPI;