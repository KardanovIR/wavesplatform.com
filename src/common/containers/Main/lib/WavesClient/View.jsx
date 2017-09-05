import React from 'react';

import TitleTextCTA from 'src/common/components/TitleTextCTA';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';


import injectSheet from 'react-jss';
import styles from './styles';



const MainScreen = ({
    classes,
    onGetClientClick,
}) => (
    <Row className={classes.root} alignItems="center">
        <Col xs={12} sm={6} className={classes.imageCol}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
            <Margin />
        </Col>
        <Col xs={12} sm={6} md={5} mdOffset={1}>
            <div className={classes.titleTextCtaWrapper}>
                <TitleTextCTA
                    title="The Waves Client"
                    titleType="display3"
                    textType="body2"
                    text="The current version of the Waves client is a wallet, decentralised exchange (DEX), and a tool to release tokens."
                    buttons={[
                        (
                            <Button
                                onClick={onGetClientClick}
                                key="main_cta_button"
                                target="_blank"
                                href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                            >
                                Get Client
                            </Button>
                        ),
                    ]}
                />
            </div>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);