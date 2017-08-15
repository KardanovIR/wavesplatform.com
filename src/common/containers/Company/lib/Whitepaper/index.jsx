import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';


import injectSheet from 'react-jss';
import styles from './styles';



const Whitepaper = ({ classes }) => (
    <Row className={classes.root} alignItems="center">
        <Col xs={12} sm={6} md={5}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} sm={6} md={7}>
            <Typography type="display2">
                Whitepaper
            </Typography>
            <Typography type="body">
                WAVES is a decentralized blockchain platform focusing on custom blockchain tokens operations. National currencies transfer is maintained on the WAVES blockchain through compliant gateway operators. 
            </Typography>

            <Margin bottom={3} />
            
            <Button>Download Whitepaper</Button>
        </Col>
    </Row>
);


export default injectSheet(styles)(Whitepaper);