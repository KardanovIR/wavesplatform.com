import React from 'react';

import TitleTextCTA from 'src/common/components/TitleTextCTA';
import BlockQuote from 'src/common/components/BlockQuote';

import { Row, Col } from 'src/common/components/Grid';

import Button from 'src/common/components/Button';


import Numbers from './lib/Numbers';



import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({
    classes,
    dexData,
}) => (
    <Row>
        <Col xs={12} md={6}>
            <div className={classes.titleTextCtaWrapper}>
                <TitleTextCTA
                    title="Decentralized blockchain platform"
                    text="Waves gives all the necessary infrastructure for the production, storage, management, sale and analysis of your digital assets"
                    inverted
                    buttons={[
                        <Button withLoader className={classes.primaryButton} key="main_cta_button" href="/download">Get Client</Button>,
                        <Button withLoader className={classes.secondaryButton} secondary key="main_cta_button2" href="/download">Get Waves</Button>,
                    ]}
                />
            </div>
            <Numbers { ...dexData } />
        </Col>
        <Col xs={12} md={6}>
            <Row>
                <Col xs={12} className={classes.swappedToBottom}>
                    <BlockQuote align="right">
                        <div className={classes.deloitteLogo} />
                        <div>In cooperation with our strategic partner Deloitte, we are changing the future of blockchain and creating the new economy</div>
                    </BlockQuote>
                </Col>
                <Col xs={12} className={classes.swappedToTop + ' ' + classes.imageWrapper}>
                    {/* <div className={classes.image} /> */}
                </Col>
            </Row>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);