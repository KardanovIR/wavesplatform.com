import React from 'react';

import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';


const styles = theme => ({
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block'
        }
    }
})


const FriendlyAPI = ({ classes }) => (
    <Row>
        <Col xs={12} md={8} lg={7}>
            <Typography type="display1" margin>
                Developer-Friendly API
            </Typography>
            <Typography type="body" margin>
                Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically.
            </Typography>

            <Margin bottom={4}>
                <Typography type="body">
                    Our open source client application uses the same API; you can explore it and implement any kind of client application yourself.
                </Typography>
            </Margin>

            <Margin bottom={3} right={3} className={classes.buttonWrapper}>
                <IconButton iconName="github">
                    Documentation
                </IconButton>
            </Margin>
            <Margin bottom={3} right={3} className={classes.buttonWrapper}>
                <IconButton iconName="github" color="gray-300">
                    Client
                </IconButton>
            </Margin>
            <Margin bottom={3} right={3} className={classes.buttonWrapper}>
                <IconButton iconName="swagger" color="gray-300">
                    Swagger
                </IconButton>
            </Margin>
        </Col>
        <Col xs={12} md={6}>
        </Col>
    </Row>
);


export default injectSheet(styles)(FriendlyAPI);