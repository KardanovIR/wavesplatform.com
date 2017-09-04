import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';

import injectSheet from 'react-jss';
import styles from './styles';



import exchanges from './exchanges.json';



const Exchanges = ({
    classes
}) => (
    <div>
        <Row>
            <Col xs={12}>
                <Typography type="display3" align="center">
                    Buy Waves on Exchanges
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>
        <Row>
            { exchanges.map((contact, index) => (
                <Col key={`media_org_${index}`} xs={12} sm={6} md={4}>
                    <a href={contact.url} target="_blank" className={classes.link}>
                        <Panel className={classes.media}>
                            <img src={contact.logo} className={classes.logo} alt="Exchange contact" />
                        </Panel>
                    </a>
                </Col>
            )) }
        </Row>        
    </div>
);


export default injectSheet(styles)(Exchanges);