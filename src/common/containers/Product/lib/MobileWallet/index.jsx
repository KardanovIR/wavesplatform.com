import React from 'react';

import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root} alignItems="center">
        <Col xs={12} md={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} md={6}>
            <Typography type="display2" margin>
                Mobile wallet
            </Typography>
            <Typography type="body" margin>
                Don’t forget to download the mobile wallet for iOS & Android.
            </Typography>

            <Margin />

            <Margin bottom={2} right={1} className={classes.buttonWrapper}>
                <Button>
                    Google play
                </Button>
            </Margin>
            <Margin bottom={2} right={1} className={classes.buttonWrapper}>
                <Button>
                    Appstore
                </Button>
            </Margin>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);