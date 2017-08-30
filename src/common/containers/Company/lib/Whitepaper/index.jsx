import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';

const wpImageSrc = require('!svg-url-loader?noquotes!./img/wp.svg');


import injectSheet from 'react-jss';
import styles from './styles';



const Whitepaper = ({ classes }) => (
    <Row alignItems="center">
        <Col sm={6} md={4} mdOffset={1}>
            <img src={wpImageSrc} alt="Whitepaper" className={classes.image} />
        </Col>
        <Col xs={12} sm={6} md={6} mdOffset={1}>
            <Typography type="display3">
                Whitepaper
            </Typography>
            <Typography type="body" cut>
                WAVES is a decentralized blockchain platform focusing on custom blockchain tokens operations. National currencies transfer is maintained on the WAVES blockchain through compliant gateway operators. 
            </Typography>

            <Margin bottom={3} />
            
            <Button>Download Whitepaper</Button>
        </Col>
    </Row>
);


export default injectSheet(styles)(Whitepaper);