import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';
import Link from 'src/common/components/Link';


import injectSheet from 'react-jss';
import styles from './styles';


import media from './media';



const Team = ({
    classes,
}) => (
    <div className={classes.root}>
        <Row>
            <Col xs={12}>
                <Typography type="display3" align="center">
                    Media
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>
        <Row>
            { media.map((contact, index) => (
                <Col key={`media_org_${index}`} xs={12} sm={6} md={4}>
                    <Link href={contact.url} target="_blank" className={classes.link}>
                        <Panel className={classes.media}>
                            <img src={contact.image} className={classes.logo} alt="Media contact" />
                        </Panel>
                    </Link>
                </Col>
            )) }
        </Row>

        <Margin bottom={3} />

        <div className={classes.contactUs}>
            <Typography type="display1">
                If you have any questions about partnerships or collaboration
            </Typography>
            <Margin bottom={3} />

            <Margin right={1} bottom={2} display="inline-block">
                <Button href="mailto:contact@wavesplatform.com">Contact us</Button>
            </Margin>

            <Button href="#" color="gray-500">Branding package</Button>
        </div>
        
    </div>
);


export default injectSheet(styles)(Team);