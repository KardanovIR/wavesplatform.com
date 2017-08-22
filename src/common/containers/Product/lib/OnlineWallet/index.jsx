import React from 'react';

import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root} direction="row-reverse" alignItems="center">
        <Col xs={12} md={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} md={6}>
            <Typography type="display2" margin>
                Online wallet
            </Typography>
            <Typography type="body2" margin>
                You do not have to download the client, use online wallet
            </Typography>

            <Margin />

            <Button>
                Use the online wallet
            </Button>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);