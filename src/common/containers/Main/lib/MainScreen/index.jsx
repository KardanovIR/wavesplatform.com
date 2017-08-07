import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import Button from 'src/common/components/Button';

import NumbersMain from 'src/common/containers/NumbersMain';



import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>

            <div className={classes.title}>
                <Typography type="display4">
                    Decentralized blockchain platform
                </Typography>
            </div>


            <div className={classes.text}>
                <Typography type="body">
                    Waves gives all the necessary infrastructure for the production, storage, management, sale and analysis of your digital assets
                </Typography>
            </div>


            <div>
                <div className={classes.buttonWrapper}>
                    <Button>Get Client</Button>
                </div>

                <div className={classes.buttonWrapper}>
                    <Button color="gray-50">Get Waves</Button>
                </div>
            </div>

            <NumbersMain />

        </Col>
        <Col xs={12} md={6}>
            <Row>
                <Col xs={12} className={classes.swappedToBottom}>
                    <div className={classes.deloitte}>
                        <div className={classes.deloitteLogo} />
                        <Typography type="quote" color="gray-300">
                            <div>In cooperation with our strategic partner Deloitte, we are changing the future of blockchain and creating the new economy</div>
                        </Typography>
                    </div>

                </Col>
                <Col xs={12} className={classes.swappedToTop + ' ' + classes.imageWrapper}>
                    <div className={classes.image} />
                </Col>
            </Row>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);