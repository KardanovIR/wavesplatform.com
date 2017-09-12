import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';

import injectSheet from 'react-jss';
import styles from './styles';


import media from './media.json';



const Media = ({
    classes,
    onBrandingPackageClick,
    onContactUsClick,
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
                    <a href={contact.url} target="_blank" className={classes.link}>
                        <Panel className={classes.media}>
                            <img src={contact.logo} className={classes.logo} alt="Media contact" />
                        </Panel>
                    </a>
                </Col>
            )) }
        </Row>

        <Margin bottom={3} />

        <Row centered>
            <Col xs={12} md={8} lg={5} className={classes.contactUs}>
                <Typography type="body2">
                    For all media inquiries, please contact the Communications Team
                </Typography>

                <Margin bottom={3} />

                <Margin right={1} bottom={2} display="inline-block">
                    <Button onClick={onContactUsClick} href="mailto:pr@wavesplatform.com">Contact us</Button>
                </Margin>
                <Button
                    onClick={onBrandingPackageClick}
                    href="https://s3.ca-central-1.amazonaws.com/wavesdb.com/images/Waves_brand_pack_1.2.rar"
                    target="_blank"
                    secondary
                >
                    Branding package
                </Button>
            </Col>
        </Row>
        
    </div>
);


export default injectSheet(styles)(Media);