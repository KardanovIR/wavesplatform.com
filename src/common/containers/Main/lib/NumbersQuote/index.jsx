import React from 'react';

import BlockQuote from 'src/common/components/BlockQuote';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import Numbers from './lib/Numbers';


import injectSheet from 'react-jss';
import styles from './styles';




const NumbersQuote = ({
    classes,
    dexData,
}) => (
        <Row>

            <Col xs={12} md={6}>
                <Numbers { ...dexData } />
                <Margin bottom={3} />
            </Col>

            <Col xs={12} md={6}>
                <BlockQuote align="right">
                    <div className={classes.deloitteLogo} />
                    <div>In cooperation with our strategic partner Deloitte, we are changing the future of blockchain and creating the new economy</div>
                </BlockQuote>
            </Col>

        </Row>
    );


export default injectSheet(styles)(NumbersQuote);