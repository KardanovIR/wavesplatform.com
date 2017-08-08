import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import Image from './lib/Image';
import Quote from './lib/Quote';


import injectSheet from 'react-jss';
import styles from './styles';




const Description = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} sm={6} md={4}>
            <Image
                logo={<div style={{ height: 20, background: 'red' }} />}
                description="Worldwide coworking spaces for Tech Community"
                website="primalbase.com"
            />
            <br/>
        </Col>
        <Col xs={12} sm={6} md={8}>
            <Typography type="display2">
                Primalbase crowdsale ends after one day and over 3 000 BTC raised
            </Typography>
            <br />
            <Quote
                avatar={<div style={{ height: 90, background: 'red' }} />}
                signature="Primalbase Team"
            >
                We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants
            </Quote>
        </Col>
    </Row>
);


export default injectSheet(styles)(Description);