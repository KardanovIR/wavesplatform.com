import React from 'react';

import TitleTextCTA from 'src/common/components/TitleTextCTA';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';


import injectSheet from 'react-jss';
import styles from './styles';



const MainScreen = ({ classes }) => (
    <Row className={classes.root} alignItems="center">
        <Col xs={12} sm={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} sm={6}>
            <div className={classes.titleTextCtaWrapper}>
                <TitleTextCTA
                    title="The Waves Client"
                    titleType="display3"
                    textType="body2"
                    text="The current version of the Waves client is a wallet, decentralized exchange, and a tool to release tokens."
                    buttons={[
                        <Button withLoader key="main_cta_button" href="#">Get Client</Button>,
                    ]}
                />
            </div>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);