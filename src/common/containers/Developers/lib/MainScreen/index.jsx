import React from 'react';

import Typography from 'src/common/components/Typography';
import AvatarWithText from 'src/common/components/AvatarWithText';

import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>
            <Typography type="display4" margin>
                Developers page
            </Typography>
            <AvatarWithText
                avatar={<div style={{background: 'pink', height: '100%'}} />}
                text="Wallet"
            />
            <AvatarWithText
                avatar={<div style={{background: 'pink', height: '100%'}} />}
                text="Decentralized exchange"
            />
            <AvatarWithText
                avatar={<div style={{background: 'pink', height: '100%'}} />}
                text="Issuing tokens"
            />
        </Col>
        <Col xs={12} md={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);