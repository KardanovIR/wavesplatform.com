import React from 'react';

import { Row, Col } from '../../components/Grid';
import NumeralDemo from '../../components/NumeralDemo';


import injectSheet from 'react-jss';


const styles = theme => ({
    numberWrapper: {
        marginBottom: theme.spacing.unit*4
    }
})


const ColNumber = injectSheet(styles)(({ classes, children }) => 
    <Col className={classes.numberWrapper} xs={6}>{ children }</Col>)



const NumbersMain = () => (
    <Row>
        <ColNumber >
            <NumeralDemo
                number={0.00110862}
                text="Waves token value"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={1031819.67}
                text="24h DEX value"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={72237}
                text="Wallets created"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={3110}
                text="tokens issued"
            />
        </ColNumber>
    </Row>
)


export default NumbersMain;