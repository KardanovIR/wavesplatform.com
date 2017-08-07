import React from 'react';


import TitleTextCTA from 'src/common/components/TitleTextCTA';
import AvatarWithText from 'src/common/components/AvatarWithText';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';


const ColFeature = ({ children, className }) => 
    <Col xs={12} md={4} lg className={className}>{ children }</Col>;



const MainScreen = ({ classes }) => (
    <div className={classes.root}>
        <Row>
            <Col xs={6}>
                <TitleTextCTA
                    title="Wallet"
                    titleType="display2"
                    text="Your balance is stored on a blockchain that only you can access. Only you can manage your crypto assets."
                />
            </Col>
        </Row>
        <Row>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<div style={{ background: 'lightcyan' }} />}
                    text="Take advantage of our platform’s high security"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<div style={{ background: 'lightcyan' }} />}
                    text="Get interest on your Waves account balance"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<div style={{ background: 'lightcyan' }} />}
                    text="Transfer funds from person to person"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<div style={{ background: 'lightcyan' }} />}
                    text="Start mining — it’s easy with Waves"
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<div style={{ background: 'lightcyan' }} />}
                    text="Create a multiple-currency wallet"
                />
            </ColFeature>
        </Row>
    </div>

);


export default injectSheet(styles)(MainScreen);