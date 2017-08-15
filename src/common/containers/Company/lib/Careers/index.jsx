import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';
import Link from 'src/common/components/Link';


import injectSheet from 'react-jss';
import styles from './styles';


import positions from './positions';



const Team = ({
    classes,
}) => (
    <div className={classes.root}>
        <Row>
            <Col xs={12} className={classes.centered}>
                <Typography type="display3" align="center">
                    Careers
                </Typography>
                <Margin bottom={3} />

                <Typography type="body" align="center" className={classes.narrow}>
                    We’d be happy to welcome you to our team. Come change the world with us.
                </Typography>

                <Margin bottom={3} />

                <Button href="mailto:job@wavesplatform.com">Submit a resume</Button>

                <Margin bottom={5} />
            </Col>
        </Row>
        <Row>
            { positions.map((pos, index) => (
                <Col key={`media_org_${index}`} xs={12} sm={4}>
                    <Link href={pos.url} target="_blank" className={classes.image} style={{backgroundImage: `url(${pos.image})`}} />
                    <Margin bottom={1} />
                    <Link href={pos.url} target="_blank" className={classes.link}>
                        { pos.title }
                    </Link>
                </Col>
            )) }
        </Row>

        <Margin bottom={3} />        
    </div>
);


export default injectSheet(styles)(Team);